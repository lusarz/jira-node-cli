export default interface Action {
    name: string;
    description: string;
    props: Array<string>;
    print: Function;
    fetch: Function;
};
