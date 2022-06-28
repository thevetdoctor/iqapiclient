import {apiUrl} from './helper';
import { useGet } from "restful-react";

export default function SchemaComponent () {
        const { data: randomDogImage, loading } = useGet({
          // const { data, loading } = useGet({
          path: `${apiUrl}`
          // path: "https://dog.ceo/api/breeds/image/random",
        });
      console.log(loading);
    return <img alt="Here's a good boye!" src={randomDogImage && randomDogImage.message} />;
    // return <img alt="Here's a good boye!" src={data[0].cover} />;
}