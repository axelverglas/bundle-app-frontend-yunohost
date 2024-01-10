import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import './Home.css';
import PageFooter from '@/components/ui/pageFooter';

const Home: React.FC = () => {

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/bundle');
    };

    const createBundle = () => {
        navigate('/new-bundle');
    };

    return (
    <>
        <h1 className='page-title'>Bundles</h1>

        <div className='card-container'>
            <Card  className='card' onClick={handleCardClick}>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>

        </div>

        <Button className='' onClick={createBundle}>
          Créer un bundle
        </Button>

        <PageFooter></PageFooter>
    </>
    );
  
};

export default Home;
