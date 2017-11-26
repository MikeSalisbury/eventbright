import React from 'react';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault;
    console.log(this.props);
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        if (error === null) {
          //upload successful
          this.props.postImage(images[0].url);
        }
      });
  }

  render() {
    return (
      <div>
        <button className='image-upload-button'
          onClick={this.upload}>Upload Image</button><br/>
        url: {this.props.imgUrl}
      </div>
    );
  }

}

export default UploadButton;
