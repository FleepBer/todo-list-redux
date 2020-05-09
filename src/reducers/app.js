import packgeJson from '../../package.json';

const INITIAL_STATE = {
    name: packgeJson.name,
    version: packgeJson.version,
    dependencies: packgeJson.dependencies,
};

export const appReducer = (state = INITIAL_STATE) => state;
