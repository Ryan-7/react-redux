import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

// This file tells enzyme we are using React 16
// Enzyme no longer includes all version in its core
// It's up to the dev to setup for which verison of React they're using

