import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { motion } from "framer-motion";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const List = ({ people,setPeople }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imgUrl,setImgUrl]=useState('');

  const openModal = (e) => {
    console.log(e.target.src)
    setImgUrl(e.target.src)
    setIsOpen(true);
  };
  const closeModal=()=>{
    setIsOpen(false);
  }
  const handleDelete=(e)=>{
    console.log(e.target.id)
    let newArr=people.filter(obj=>obj.id!=e.target.id)
    setPeople(newArr)
  }

  //console.log(people);
  return (
    <>
      <div className="d-flex justify-content-around flex-wrap p-2">
        {people.length==0 && <div>...nincs esemény</div>}
        {people.map((obj) => (
          <div className="mt-2 mr-1" key={obj.id}>
            <Card sx={{ maxWidth: 280 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={obj.image}
                  alt={obj.name}
                  onClick={openModal}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {obj.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    age:{obj.age}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <motion.span whileHover={{ scale: 1.3 }}>
                  <Button id={obj.id} size="small" color="primary" onClick={handleDelete}>
                    delete
                  </Button>
                </motion.span>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Button onClick={closeModal} size="small" color="primary">close</Button>
        <div>
          <img className="modalImg" src={imgUrl} alt="foto" />
        </div>
      </Modal>
    </>
  );
};
