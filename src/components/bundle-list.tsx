import { useGetBundles } from '@/api/bundle';
import { Card, CardTitle, CardDescription, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import { useNavigate } from 'react-router-dom';

export default function BundleList() {
    const { data: bundles, isLoading, error } = useGetBundles();

    const navigate = useNavigate();

    const seeBundle = (bundleId : number) => {
        navigate(`/bundle/${bundleId}`);
    };

    if (isLoading) return <div>Loading bundles...</div>;
    if (error) return <div>Aucun Bundle trouvé</div>;
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bundles &&
                bundles.map((bundle) => (
                    <Card key={bundle.id}>
                        <CardHeader>
                            <CardTitle>{bundle.title}</CardTitle>
                            <CardDescription>{bundle.description}</CardDescription>
                            <a className={cn(buttonVariants({ variant: 'link' }), 'w-fit p-0 cursor-pointer')} onClick={() => seeBundle(bundle.id)}>Voir ce bundle</a>
                        </CardHeader>
                    </Card>
                ))}
        </div>
    );
}
