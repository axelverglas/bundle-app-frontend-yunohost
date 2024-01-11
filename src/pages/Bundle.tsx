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
import { ScrollArea } from "@/components/ui/scroll-area"
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
                <DialogContent className='h-[90%]'>
                  <DialogHeader>
                    <DialogTitle className='text-center'><h1>Nom de l'app</h1></DialogTitle>
                    <img src="https://cdn.helloasso.com/img/logos/yeswiki-3a2178a821694d8297d746434ab6f356.png?resize=fill:140:140" alt="" className='inline-block w-[20%] h-auto rounded-[50%] border-[none] block m-auto'/>
                    
                    <DialogDescription>

                    <ScrollArea className="h-[95%] rounded-md border p-4">
                    <p className='pb-[5%]'>This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.</p>
                      <img src="https://interpole.xyz/cache/YeswikI2_imagebf_image_Screenshot_20221108_at_142514_Bienvenue_sur_YesWiki_vignette_600_600_20221108142653_20221108142653.png" alt="" className='w-auto h-[90%]'/>

                    </ScrollArea>
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
