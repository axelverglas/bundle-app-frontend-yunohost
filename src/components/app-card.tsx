import { App } from '@/types/interface';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

interface AppCardProps {
    app: App;
    onSelect?: (selectedApp: string) => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, onSelect }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelect = () => {
        setIsSelected(!isSelected);
        if (onSelect) {
            onSelect(app.app_name);
        }
    };

    return (
        <Card>
            <CardHeader>
                <Dialog>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <img src={app.logo} alt={app.name} className="w-16 h-16 mb-4" />
                            <CardTitle>{app.name}</CardTitle>
                        </div>
                        <DialogTrigger>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4" />
                                <path d="M12 8h.01" />
                            </svg>
                        </DialogTrigger>
                    </div>
                    <CardDescription>{app.description}</CardDescription>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{app.description}</DialogTitle>
                            <DialogDescription>
                                <img
                                    src="https://github.com/YunoHost-Apps/nextcloud_ynh/blob/master/doc/screenshots/screenshot.png?raw=true"
                                    alt={app.name}
                                />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent>
                <Button type="button" onClick={handleSelect}>
                    {isSelected ? 'Désélectionner' : 'Sélectionner'}
                </Button>
            </CardContent>
        </Card>
    );
};

export default AppCard;
