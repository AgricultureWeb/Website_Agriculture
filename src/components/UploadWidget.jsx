import { useEffect, useRef, useState } from "react";

const UploadWidget = ({ text, onUploadSuccess }) => {
  const widgetRef = useRef(null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  useEffect(() => {
    const initWidget = () => {
      widgetRef.current = window.cloudinary.createUploadWidget(
        {
          cloudName: cloudName,
          uploadPreset: uploadPreset,
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            if (onUploadSuccess) {
              onUploadSuccess(result.info);
            }
          }
        }
      );

      setWidgetLoaded(true);
    };

    if (!widgetLoaded) {
      initWidget();
    }
  }, [widgetLoaded, onUploadSuccess, cloudName, uploadPreset]);

  return (
    <button
      onClick={() => widgetRef.current.open()}
      type="button"
      className="bg-secondary_green text-black block mx-auto mt-1 rounded-lg w-full text-sm "
    >
      {text}
    </button>
  );
};

export default UploadWidget;
