import { MigrationInterface, QueryRunner } from "typeorm";

export class FakePosts1598903563200 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                insert into post (title, text, "creatorId") values ('Amazing Journey: The Story of The Who', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1);
    insert into post (title, text, "creatorId") values ('As If I Didn''t Exist (Elina - Som om jag inte fanns)', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1);
    insert into post (title, text, "creatorId") values ('Amour fou, L''', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1);
    insert into post (title, text, "creatorId") values ('Stalingrad', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
    
    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1);
    insert into post (title, text, "creatorId") values ('Along Came Jones', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1);
    insert into post (title, text, "creatorId") values ('Joe Somebody', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1);
    insert into post (title, text, "creatorId") values ('Forever Yours (Ikuisesti sinun)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
    
    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1);
    insert into post (title, text, "creatorId") values ('Tokio Baby', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
    
    Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1);
    insert into post (title, text, "creatorId") values ('Thief of Bagdad, The', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1);
    insert into post (title, text, "creatorId") values ('One-Eyed Jacks', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1);
    insert into post (title, text, "creatorId") values ('One Man''s Hero', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1);
    insert into post (title, text, "creatorId") values ('Private', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1);
    insert into post (title, text, "creatorId") values ('Summer Holiday', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1);
    insert into post (title, text, "creatorId") values ('Indiana Jones and the Kingdom of the Crystal Skull', 'Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1);
    insert into post (title, text, "creatorId") values ('Star Kid', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
    
    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1);
    insert into post (title, text, "creatorId") values ('Ace in the Hole (Big Carnival, The)', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1);
    insert into post (title, text, "creatorId") values ('Just Like a Woman', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1);
    insert into post (title, text, "creatorId") values ('Harold and Maude', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1);
    insert into post (title, text, "creatorId") values ('All Dogs Go to Heaven 2', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1);
    insert into post (title, text, "creatorId") values ('In Vanda''s Room (No Quarto da Vanda)', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1);
    insert into post (title, text, "creatorId") values ('Pusher II: With Blood on My Hands', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1);
    insert into post (title, text, "creatorId") values ('Vassilisa the Beautiful (Vasilisa prekrasnaya)', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1);
    insert into post (title, text, "creatorId") values ('Mo', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1);
    insert into post (title, text, "creatorId") values ('Strange Brew', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1);
    insert into post (title, text, "creatorId") values ('Man on the Roof, The (Mannen på taket)', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1);
    insert into post (title, text, "creatorId") values ('Sapphire', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1);
    insert into post (title, text, "creatorId") values ('7th Heaven (Seventh Heaven)', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1);
    insert into post (title, text, "creatorId") values ('Tromeo and Juliet', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1);
    insert into post (title, text, "creatorId") values ('Joysticks', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1);
    insert into post (title, text, "creatorId") values ('Scooby-Doo 2: Monsters Unleashed', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1);
    insert into post (title, text, "creatorId") values ('Animal Kingdom', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1);
    insert into post (title, text, "creatorId") values ('Moebius', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1);
    insert into post (title, text, "creatorId") values ('Misérables, Les', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1);
    insert into post (title, text, "creatorId") values ('Going to Kansas City', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1);
    insert into post (title, text, "creatorId") values ('Man, The', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 1);
    insert into post (title, text, "creatorId") values ('Never Forever', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1);
    insert into post (title, text, "creatorId") values ('Chump at Oxford, A', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1);
    insert into post (title, text, "creatorId") values ('Stoned', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1);
    insert into post (title, text, "creatorId") values ('Star Trek: Insurrection', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1);
    insert into post (title, text, "creatorId") values ('Dreamlife of Angels, The (Vie rêvée des anges, La)', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
    
    Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1);
    insert into post (title, text, "creatorId") values ('Overnight Delivery', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1);
    insert into post (title, text, "creatorId") values ('Never Say... Never! (Il ne faut jurer... de rien!)', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1);
    insert into post (title, text, "creatorId") values ('Come Back to Me', 'In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
    
    Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1);
    insert into post (title, text, "creatorId") values ('C.S.A.: The Confederate States of America', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1);
    insert into post (title, text, "creatorId") values ('Tai-Pan', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
    
    Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1);
    insert into post (title, text, "creatorId") values ('Shadow Man', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1);
    insert into post (title, text, "creatorId") values ('Executioners (Xian dai hao xia zhuan)', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1);
    insert into post (title, text, "creatorId") values ('Joe + Belle', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1);
    insert into post (title, text, "creatorId") values ('Pat and Mike', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1);
    insert into post (title, text, "creatorId") values ('Donnie Darko', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1);
    insert into post (title, text, "creatorId") values ('Grind', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
    
    Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1);
    insert into post (title, text, "creatorId") values ('Hello, Dolly!', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1);
    insert into post (title, text, "creatorId") values ('Time of Eve (Eve no jikan)', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1);
    insert into post (title, text, "creatorId") values ('Friends of God: A Road Trip with Alexandra Pelosi', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1);
    insert into post (title, text, "creatorId") values ('Last Lovecraft: Relic of Cthulhu, The', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1);
    insert into post (title, text, "creatorId") values ('Civil War, The', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1);
    insert into post (title, text, "creatorId") values ('Weeds', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1);
    insert into post (title, text, "creatorId") values ('Seven Days in Utopia', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1);
    insert into post (title, text, "creatorId") values ('Trust Us, This Is All Made Up', 'Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1);
    insert into post (title, text, "creatorId") values ('Weird Woman', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1);
    insert into post (title, text, "creatorId") values ('Bulletproof Monk', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1);
    insert into post (title, text, "creatorId") values ('''Salem''s Lot', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1);
    insert into post (title, text, "creatorId") values ('Dilemma, The', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1);
    insert into post (title, text, "creatorId") values ('The Hunchback of Paris', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1);
    insert into post (title, text, "creatorId") values ('Testament of Orpheus, The (Testament d''Orphée)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
    
    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1);
    insert into post (title, text, "creatorId") values ('Teaching Mrs. Tingle', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1);
    insert into post (title, text, "creatorId") values ('Remains of the Day, The', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1);
    insert into post (title, text, "creatorId") values ('Hotel for Dogs', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1);
    insert into post (title, text, "creatorId") values ('American Pie Presents The Naked Mile (American Pie 5: The Naked Mile)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1);
    insert into post (title, text, "creatorId") values ('Flight Command', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1);
    insert into post (title, text, "creatorId") values ('Curse of the Cat People, The', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1);
    insert into post (title, text, "creatorId") values ('Two Days in April', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1);
    insert into post (title, text, "creatorId") values ('Bridget Jones''s Diary', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1);
    insert into post (title, text, "creatorId") values ('Shoot the Moon', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1);
    insert into post (title, text, "creatorId") values ('Storm Center', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1);
    insert into post (title, text, "creatorId") values ('Take Care of Your Scarf, Tatiana (Pidä huivista kiinni, Tatjana)', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1);
    insert into post (title, text, "creatorId") values ('Project Moon Base', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1);
    insert into post (title, text, "creatorId") values ('The Cheat', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1);
    insert into post (title, text, "creatorId") values ('Fjols til fjells', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1);
    insert into post (title, text, "creatorId") values ('Full Monty, The', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1);
    insert into post (title, text, "creatorId") values ('Tall T, The', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1);
    insert into post (title, text, "creatorId") values ('Natural Selection', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1);
    insert into post (title, text, "creatorId") values ('Hero at Large', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1);
    insert into post (title, text, "creatorId") values ('Westward the Women', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1);
    insert into post (title, text, "creatorId") values ('Best Men', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1);
    insert into post (title, text, "creatorId") values ('Adventure of Sherlock Holmes'' Smarter Brother, The', 'Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1);
    insert into post (title, text, "creatorId") values ('Saved!', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
    
    Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1);
    insert into post (title, text, "creatorId") values ('Battle in Outer Space', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1);
    insert into post (title, text, "creatorId") values ('Buck and the Preacher', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1);
    insert into post (title, text, "creatorId") values ('Spare Bed-Room', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1);
    insert into post (title, text, "creatorId") values ('Hunky Dory', 'Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1);
    insert into post (title, text, "creatorId") values ('To Live (Huozhe)', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1);
    insert into post (title, text, "creatorId") values ('Matrix Revolutions, The', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1);
    insert into post (title, text, "creatorId") values ('Buried Alive', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1);
    insert into post (title, text, "creatorId") values ('Graveyard of Honor (Shin jingi no hakaba)', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1);
    insert into post (title, text, "creatorId") values ('Bajo la Sal (Under the Salt)', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
    
    Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1);
    insert into post (title, text, "creatorId") values ('Love''s Kitchen', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 1);
    insert into post (title, text, "creatorId") values ('Face to Face (Ansikte mot ansikte)', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1);
    insert into post (title, text, "creatorId") values ('Kundun', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1);
    insert into post (title, text, "creatorId") values ('Somebody is Waiting', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1);
    
            `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
