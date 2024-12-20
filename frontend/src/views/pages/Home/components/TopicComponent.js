import React, { useEffect,useState } from 'react';
import { Row,Col } from 'react-bootstrap';
import axios from 'axios'
import PollComponent from './PollComponent';
import ChoiceComponent from './ChoiceComponent';

const TopicComponent = () => {

    // constants
    const url = process.env.REACT_APP_API_URL;
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const [topic,setTopic] = useState([]);
    
    const [isLoading,setIsLoading] = useState(false);

    useEffect( () => {
        setIsLoading(true)
        axios(`${url}/homepage/topics`) // Topic hasMany Choices
        .then( response => {
          //console.log(response)
          setTopic(response.data.topic)
        })
        .catch( error => {
          console.warn(error)
        })
        .finally( () =>{ 
          setIsLoading(false)
        })
      },[])

    return (
        <>
            <Col xs={12} md={4} className="border bg-dark text-light border-1 p-3 rounded mb-3 p-4">
                <h2>{topic?.title}</h2>
                <span>{topic?.description}</span>
            </Col>

            <Col style={{'width':'10px'}} md={1}></Col>

            <Col style={{'width':'100vH'}} xs={12} md={7} className=" p-3 rounded d-none d-sm-flex">
                {topic?.id &&
                  <ChoiceComponent topicId={topic.id} />
                }
            </Col>
        </>
    );
};

export default TopicComponent;