import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, set_name] = useState('default Namasate');
  const { id } = useParams();
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    set_name(newPerson.name)
    console.log(newPerson);
  },[])
  return (
    <div>
      <h2>{name}</h2>

      <Link to="/people" className="btn">
        Back to People
      </Link>
    </div>
  );
};

export default Person;
