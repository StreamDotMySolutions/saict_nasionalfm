import { useState } from 'react'
import { Button, Figure, Modal} from 'react-bootstrap'


export default function ImageModal({filename}) {
  
    const url = process.env.REACT_APP_SERVER_URL; 
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleShowClick = () =>{
      setShow(true)
    } 

    const handleCloseClick = () => {
      handleClose()
    }

    return (
      <>
        <Figure>
            <Figure.Image
                className='img-thumbnail rounded'
                style={{ width: '150px', cursor: 'pointer' }}
                src={`${url}/storage/topics/${filename}`}
                onClick={handleShowClick}
            />
        </Figure>
  
        <Modal size={'lg'} show={show} onHide={handleCloseClick}>
          <Modal.Header closeButton>
            <Modal.Title>Show Topic</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Figure>
                <Figure.Image
                    className='img-fluid rounded'
                    src={`${url}/storage/topics/${filename}`}
                />
            </Figure>
          </Modal.Body>
          
          <Modal.Footer>
            <Button 
             
              variant="secondary" 
              onClick={handleCloseClick}>
              Close
            </Button>


          </Modal.Footer>
        </Modal>
      </>
    );
  }