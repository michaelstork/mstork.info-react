import './ImageViewer.css';
import React from 'react';

class ImageViewer extends React.Component {
	render() {
    if (!this.props.imageViewerSrc) return null;

		return (
      <div className="Image-viewer" onClick={() => this.props.setImageViewerSrc(null)}>
        <img src={this.props.imageViewerSrc}  alt="Project Screenshot" />
        <a href={this.props.imageViewerSrc} target="_blank">
          <i className="mdi mdi-open-in-new"></i>
          <span>Open in New Tab</span>
        </a>
        <i className="Image-viewer-close mdi mdi-close"></i>
      </div>
		);
	}
}

export default ImageViewer;