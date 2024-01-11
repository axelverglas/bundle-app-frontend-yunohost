import BundleList from '@/components/bundle-list';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
    return (
        <div className="flex flex-col gap-4">
            <a className={cn(buttonVariants({ variant: 'default' }), 'w-fit')}>Créer un bundle</a>
            <BundleList />
        </div>
    );
}
