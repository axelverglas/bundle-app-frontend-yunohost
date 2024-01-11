// About.tsx
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

import {
    Dialog,
    DialogContent,
    DialogDescription,
    //DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  //import { Input } from "@/components/ui/input"
  //import { Label } from "@/components/ui/label"


const Bundle: React.FC = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
      <h1 className='text-center text-[35px] mt-[30px] mb-3.5'>Applications</h1>

      <div className='flex flex-wrap gap-4 justify-center m-[15px]'>
        <Card  className='flex-[0_1_calc(33.3333%_-_16px)] transition-shadow duration-[0.3s] hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:cursor-pointer'>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>

              <Dialog>
              <DialogTrigger>
                <Button variant="outline">Edit Profile</Button>
              </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle><h1>Nom de l'app</h1></DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            
                
            </CardFooter>
        </Card>

        <Card  className='flex-[0_1_calc(33.3333%_-_16px)] transition-shadow duration-[0.3s] hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:cursor-pointer'>
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

        <Card  className='flex-[0_1_calc(33.3333%_-_16px)] transition-shadow duration-[0.3s] hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:cursor-pointer'>
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

      <Button className='m-2.5' onClick={handleGoBack}>
          Retour
      </Button>



      
    </>
  );
};

export default Bundle;
