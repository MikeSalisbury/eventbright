import React from 'react';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        if (error === null) {
          this.props.postImage(images[0].url);
        }
      });
  }

  render() {
    return (
      <div>
        <button className='image-upload-button'
          onClick={this.upload}>Upload Image</button><br/>
        <div className='img-url-confirm'>URL STATUS: {(this.props.imgUrl
             === "")? "No Url" : "Url Saved"}</div>
      </div>
    );
  }

}

export default UploadButton;
