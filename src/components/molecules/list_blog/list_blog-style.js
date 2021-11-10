import styled from "styled-components";

export const ListBlogStyle = styled.div`
    .row-blog {
        clear: both;
    }

    .blog-bl-phim {
        float: left;
        width: 50%;
        padding-right: 10px;
    }
    .title-blog{
        font-size: 1rem;
        font-weight: bold;
    }
    .container-blog {
        margin-top: 25px;
    }
    .blog-card {
        display: flex;
        margin-top: 20px;
    }
    .content-card {
        font-size: 1rem;
        padding: 2px 25px;
    }
    .content-card h4 {
        font-size: 1em;
    }
    .content-card .description {
        font-size: 0.8em;
        color: #95a5a6;
    }
    .content-card .icon {
        padding: 5px 0px;
        font-size: 0.8em;
    }
    .content-card .icon > span {
        margin-right: 20px;
    }
`