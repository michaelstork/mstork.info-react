import './ImageViewer.css';
import React from 'react';

const ImageViewer = (props) => {
  if (!props.imageViewerSrc) return null;

  return (
    <div className="Image-viewer" onClick={() => props.closeImageViewer()}>
      <img src={props.imageViewerSrc}  alt="Project Screenshot" />
      <a href={props.imageViewerSrc} target="_blank">
        <i className="mdi mdi-open-in-new"></i>
        <span>Open in New Tab</span>
      </a>
      <i className="Image-viewer-close mdi mdi-close"></i>
    </div>
  );
}

export default ImageViewer;