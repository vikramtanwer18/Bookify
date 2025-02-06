import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
function ListPage() {
     const[bookName,setBookName] = useState('')
     const[ISBN,setISBN] = useState('')
     const[price,setPrice] = useState('')
     const[coverPic,setCoverPic] = useState('')
     const firebase = useFirebase()
     console.log(firebase)

     const handleSubmit = async()=>{
        await firebase.addDataInFirestore(bookName,ISBN,price,coverPic)
     }

    return(
      <div className='container mt-5'>
          <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicbookname">
        <Form.Label>Book Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Book name"
        value={bookName} onChange={(e)=>setBookName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicISBN">
        <Form.Label>ISBN</Form.Label>
        <Form.Control type="text" placeholder="ISBN number"
         value={ISBN} onChange={(e)=>setISBN(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number"  placeholder='Enter price'
         value={price} onChange={(e)=>setPrice(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicFile">
        <Form.Label>Book Cover Pic</Form.Label>
        <Form.Control type="file" 
          onChange={(e)=>setCoverPic(e.target.files[0])} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
      </div>
    )
}

export default ListPage;