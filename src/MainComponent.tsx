import { useFlag } from "@unleash/proxy-client-react";
import MyButton from "./MyButton";

export default function MainComponent() {
    const featureAEnabled = useFlag('Feature.A');

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Unleash ReactJs Demo</h3>
            {featureAEnabled && <MyButton />}
        </div>
    );
}