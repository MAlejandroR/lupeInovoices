import { Heading } from "../../molecules/Heading";
import { BlogCard } from "../../molecules/blog/BlogCard";
import { BlogListSectionStyled } from "./BlogListSectionStyled";
//import { BlogCard } from "../../molecules/blog/BlogCard";
//import BlogListSectionStyled from "./BlogListSectionStyled";

export const BlogListSection = () => {
  return (
    // <Wrapper>
    <BlogListSectionStyled>
      <Heading
        title="Últimas noticias"
        subtitle="Mantente siempre informado con InvoiceUp. Accede a las noticias más importantes"
      ></Heading>
      <BlogCard></BlogCard>
    </BlogListSectionStyled>

    //  <ul>
    //  <BlogCard></BlogCard>
    //</ul>
    //</Wrapper>
  );
};
