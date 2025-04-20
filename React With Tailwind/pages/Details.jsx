import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchPet from '../helper/fetchPet';
import Carousel from '../src/components/Carousel';
import Modal from '../src/components/Modal';
import AdoptedPetContext from '../context/AdoptedPetContext';

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);
  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate();
  const [adoptedpet, setAdoptedPet] = useContext(AdoptedPetContext)

  if (results.isLoading) {
    return (

      <div className="loading-pane">
        <h2 className="loader">🐈</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];
  console.log(results);
  console.log(pet);

  const handleModal = () => {
    setShowModal(true)
  }

  return (
    <div className="details">
      <div>
        <Carousel images={pet.images} />
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={handleModal}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
      {
        showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                onClick={() => {
                  setAdoptedPet(pet);
                  navigate("/");
                }}
                >Yes</button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null
      }
    </div>
  )
}

export default Details