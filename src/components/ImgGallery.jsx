import { useState, useEffect } from "react";

const ImgGallery = ({ images, title = "New Gallery", initialExpandedIndex = 0 }) => {
  const [expandedIndex, setExpandedIndex] = useState(initialExpandedIndex);
  const [editableTitle, setEditableTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  const handleTitleChange = (e) => {
    setEditableTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    setExpandedIndex(initialExpandedIndex);
  }, [initialExpandedIndex]);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="text-center py-4 mx-3 text-n-3 tagline">
        {isEditing ? (
          <input
            type="text"
            value={editableTitle}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            autoFocus
            className="text-2xl font-semibold border-b-2 border-gray-300 focus:outline-none"
          />
        ) : (
          <h2
            className="text-2xl font-semibold cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            {editableTitle}
          </h2>
        )}
      </div>
      <div className="h-full w-full overflow-hidden flex items-center justify-center p-4 relative">
        <div className="flex w-full max-w-6xl h-[80vh] gap-2 items-center justify-center px-4 lg:px-8 mx-auto">
          {images.map((panel, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`
                h-full cursor-pointer transition-all duration-500 ease-in-out
                ${expandedIndex === index ? "w-[55%]" : "w-[10%] hover:bg-gray-200"}
                min-w-[40px] block p-0.5 rounded-[2.5rem] bg-conic-gradient
              `}
            >
              <div className="h-full w-full bg-white rounded-[2.25rem] overflow-hidden">
                <img
                  src={panel.image}
                  alt={`Image ${index}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImgGallery;
