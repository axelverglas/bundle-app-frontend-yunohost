import FormInstall from '@/components/form-install';
import { useParams } from 'react-router-dom';

export default function Bundle() {
    const { bundleId } = useParams<{ bundleId: string }>();
    const bundleIdNum = parseInt(bundleId || '', 10);
    return <FormInstall id={bundleIdNum} />;
}