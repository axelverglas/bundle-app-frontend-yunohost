import { App } from '@/types/interface';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Skeleton } from './ui/skeleton';

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
                            {app.logo ? (
                                <img
                                    src={`https://app.yunohost.org/default/v3/logos/${app.logo}.png`}
                                    alt={app.name}
                                    className="rounded-md w-16 h-16"
                                />
                            ) : (
                                <Skeleton className="rounded-md w-16 h-16" />
                            )}
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
                            <DialogTitle>{app.name}</DialogTitle>
                            <DialogDescription>{app.description}</DialogDescription>
                        </DialogHeader>
                        <img src={app.screenshot} alt={app.name} />
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
