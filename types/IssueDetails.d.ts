import Issue from "./Issue";

export default interface IssueDetails extends Issue {
    commentsCount: number;
    comments: Array<Comment>;
};
