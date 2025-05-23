// import { useState } from "react";

// export default function CopyButton() {
//     const [copied, setCopied] = useState(false);

//     const textToCopy = "This is the text to copy!";

//     const handleCopy = () => {
//         navigator.clipboard.writeText(textToCopy).then(() => {
//             setCopied(true);
//             setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
//         });
//     };

//     return (
//         <div className="flex flex-col items-center space-y-4">
//             <p className="text-gray-700">{ textToCopy }</p>
//             <button
//                 className={ `btn ${copied ? "bg-green-500" : "bg-blue-500"} text-white px-4 py-2 rounded` }
//                 onClick={ handleCopy }
//             >
//                 { copied ? "Copied!" : "Copy" }
//             </button>
//         </div>
//     );
// }
