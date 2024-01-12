import BundleList from '@/components/bundle-list';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const goCreateBundlePage = () => {
        navigate(`/bundle/create`);
    };

    return (
        <div className="flex flex-col gap-4">
            <a className={cn(buttonVariants({ variant: 'default' }), 'w-fit cursor-pointer')} onClick={() => goCreateBundlePage()}>
                Créer un bundle
            </a>
            <BundleList />
        </div>
    );
}
