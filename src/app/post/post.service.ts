import { Injectable } from "@angular/core";
import { Post } from "./post.model";

/*
    Un service permite crear una comunicación entre diferentes
    componentes.
*/

@Injectable( {providedIn: 'root'} )
export class PostService {
    
    listOfPosts : Post[] = [
        new Post(
          'Nature',
          'Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.',
          'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg',
          'test@test.com',
          new Date()
        ),
        new Post(
          'Hampi',
          'Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear.',
          'https://www.deccanherald.com/sites/dh/files/article_images/2019/03/15/Hampi-DH-1552611002.jpg',
          'test@test.com',
          new Date()
        ),
        new Post(
          'Araku Valley',
          `Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. It's surrounded by the thick forests of the Eastern Ghats mountain range. The Tribal Museum is dedicated to the area's numerous indigenous tribes, known for their traditional Dhimsa dance, and showcases traditional handicrafts.`,
          'https://vizagtourism.org.in/images/places-to-visit/header/araku-valley-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg',
          'test@test.com',
          new Date()
        )
    ];

    getPosts() : Post[] {
        return this.listOfPosts;
    }

    deletePost( index : number ) : Post {
        return this.listOfPosts.splice( index, 1 )[0];
    }    

    addPost( post : Post ) : void {
        this.listOfPosts.push(post);
    }

    updatePost( index : number, post : Post ) : void {
        this.listOfPosts[index] = post;
    }

    getPost( index: number ) : Post {
        return this.listOfPosts[index];
    }

}