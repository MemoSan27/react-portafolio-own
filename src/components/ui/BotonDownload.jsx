import React from 'react'

const BotonDownload = () => {

  return (
    <a  href='../curr.pdf' download={true}>
          <div className="float_container btn">
            <div className="float">
              <br></br>  
              <i class='pdf bx bxs-file-pdf'></i>
              <br></br>
              <br></br>
              <p className='cv'>my CV</p>
              <i className='bx bx-cloud-download bx-fade-down bx-lg' ></i>
            </div>
          </div>
    </a>
  )
}

export default BotonDownload
