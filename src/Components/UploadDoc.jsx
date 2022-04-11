import React from 'react'
import './upload.css';
import {ImUpload2} from 'react-icons/im'

function UploadDoc() {
    return (
        <div className='upload-docs'>
            
            <form className='form-container'>
                <h2 className='form-head'>Upload your documents below :</h2>
                <div className='flex-item'>
                <div className='input-container'>
                <label for="adhar">Upload your Adhar Card Here :</label>
                <label for="pan">Upload your Pan Card :</label>
                <label for="myfile">Upload image of product :</label>
                </div>

                <div className='upload-container'>
                <span className='btn btn-primary btn-file'>
                    <ImUpload2/>
                         Upload Adhar
                        <input type="file"/></span> <br/>
                        <span className='btn btn-primary btn-file'>
                            <ImUpload2/>
                        Upload PAN 
                        <input type="file"/></span> <br/>
                        <span className='btn btn-primary btn-file'>
                        <ImUpload2/>
                        Upload Picture
                        <input type="file"/></span> <br/>
                </div>
                </div>
{/*                 
                <div className='document-container'>      
                    <span className='btn btn-primary btn-file'>
                        Upload by select
                        <input type="file" /></span>  </div>
                <div className='document-container'>  <label for="pan">Upload your Pan Card:   </label>
                    <span className='btn btn-primary btn-file'>
                        Upload by select
                        <input type="file" /></span> </div>
                <div className='document-container'>  <label for="myfile">Upload image of product:   </label>
                    <span className='btn btn-primary btn-file'>
                        Upload by select  
                        <input type="file" /></span></div> */}

                <hr />

                <button className='btn btn-primary btn-file'>Submit All documents</button>
            </form>

        </div>
    )
}

export default UploadDoc