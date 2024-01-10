import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
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
        <h1 className='text-center text-[35px] mt-[30px] mb-3.5'>Bundles</h1>

        <div className='flex flex-wrap gap-4 justify-center m-[15px]'>
            <Card  className='flex-[0_1_calc(33.3333%_-_16px)] transition-shadow duration-[0.3s] hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:cursor-pointer' onClick={handleCardClick}>
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
