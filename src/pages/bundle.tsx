import FormInstall from '@/components/install-form';
import { useParams } from 'react-router-dom';

export function Bundle() {
    const { bundleId } = useParams<{ bundleId: string }>();
    const bundleIdNum = parseInt(bundleId || '', 10);
    return <FormInstall id={bundleIdNum} />;
}
