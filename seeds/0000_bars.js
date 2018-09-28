exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rainey').del()
    .then(function () {
      // Inserts seed entries
      return knex('rainey').insert([
        {name: 'Container Bar', address: '90 Rainey St'},
        {name: 'Icenhauer’s', address: '83 Rainey St'},
        {name: 'Clive Bar', address: '609 Davis St'},
        {name: 'Half Step', address: '609 Davis St'},
        {name: 'Bar 96', address: '96 Rainey St'},
        {name: 'Unbarlievable', address: '76 Rainey St'},
        {name: 'Parlor Room', address: '88 Rainey St'},
        {name: 'Lucille', address: '77 Rainey St'},
        {name: 'Bungalow', address: '92 Rainey St'},
        {name: 'Lustre Pearl Rainey', address: '94 Rainey St'},
        {name: 'Javelina', address: '69 Rainey St'},
        {name: 'Bangers', address: '79 Rainey St'},
        {name: 'The Alibi', address: '96 Rainey St'},
        {name: 'Craft Pride', address: '61 Rainey St'},
        {name: 'The Drafting Room', address: '88 1/2 Rainey St'},
        {name: 'Geraldine’s', address: '605 Davis St'},
        {name: 'Bar Ilegal', address: '609 Davis St'},
        {name: 'L’estelle House', address: '88 1/2 Rainey St'},
        {name: 'El Naranjo', address: '85 Rainey St'},
        {name: 'Emmer & Rye', address: '51 Rainey St'}
      ])
    })
    .then(function () {
      // Inserts seed entries
      return knex('dirty').insert([
        {name: 'Library Bar', address: '407 E 6th St'},
        {name: 'Blind Pig Pub', address: '317 E 6th St'},
        {name: 'Friends Bar', address: '208 E 6th St'},
        {name: 'Dirty Dog Bar', address: '505 E 6th St'},
        {name: 'Darwin’s Piano Bar', address: '223 E 6th St'},
        {name: 'Big Bang Bar', address: '415 E 6th St'},
        {name: 'Midnight Cowboy', address: '313 E 6th St'},
        {name: 'Moose Knuckle Pub', address: '406 E 6th St'},
        {name: 'Coyote Ugly', address: '501 E 6th St'},
        {name: 'Bat Bar', address: '218 E 6th St'},
        {name: 'Parkside', address: '301 E 6th St'},
        {name: 'The Lodge', address: '411 E 6th St'},
        {name: 'Peckerheads', address: '402 E 6th St'},
        {name: 'Lit Lounge', address: '215 E 6th St'},
        {name: 'San Jac Saloon', address: '300 E 6th St'},
        {name: '512 Bar', address: '408 E 6th St'},
        {name: 'The Jackalope', address: '404 E 6th St'},
        {name: 'Thirsty Nickel', address: '325 E 6th St'},
        {name: 'Two Bucks', address: '503 E 6th St'},
        {name: 'Easy Tiger', address: '709 E 6th St'},
        {name: 'Buckshot', address: '422 E 6th St'},
        {name: 'Voodoo Room', address: '419 E 6th St'},
        {name: 'Pour Choices', address: '401 E 6th St'},
        {name: 'Touche', address: '417 E 6th St'},
        {name: 'The Dizzy Rooster', address: '306 E 6th St'},
        {name: 'Eureka!', address: '200 E 6th St'},
        {name: 'Roppolo’s', address: '414 E 6th St'},
        {name: 'HandleBar', address: '121 E 5th St'},
        {name: 'The Side Bar', address: '602 E 7th St'}
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('west').insert([
        {name: 'Key Bar', address: '617 W 6th St'},
        {name: 'Star Bar', address: '600 W 6th St'},
        {name: 'The Dogwood', address: '715 W 6th St'},
        {name: 'Parlor and Yard', address: '601 W 6th St'},
        {name: 'The Rustic Tap', address: '613 W 6th St'},
        {name: 'Kung Fu Saloon', address: '716 W 6th St'},
        {name: 'Green Light Social', address: '720 W 6th St'},
        {name: 'Buford’s', address: '700 W 6th St'},
        {name: 'Concrete Cowboy', address: '719 W 6th St'},
        {name: 'Pop', address: '620 W 6th St'},
        {name: 'The Belmont', address: '305 W 6th St'},
        {name: 'Austin Ale House', address: '301 W 6th St'},
        {name: 'Brew Exchange', address: '706 W 6th St'},
        {name: 'The Ranch', address: '710 W 6th St'}
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('east').insert([
        {name: 'Whistler’s', address: '1816 E 6th St'},
        {name: 'Shangri-La', address: '1016 E 6th St'},
        {name: 'Revelry Kitchen + Bar', address: '1410 E 6th St'},
        {name: 'Violent Crown Social Club', address: '1410 E 6th St'},
        {name: 'The Brixton', address: '1412 E 6th St'},
        {name: 'Rhino Room', address: '1012 E 6th St'},
        {name: 'La Perla Bar', address: '1512 E 6th St'},
        {name: 'Grackle', address: '1700 E 6th St'},
        {name: 'La Holly', address: '2500 E 6th St'},
        {name: 'Attabar', address: '1300 E 6th St'},
        {name: 'Cuvee Coffee Bar', address: '2000 E 6th St'},
        {name: 'The Volstead lounge', address: '1500 E 6th St'},
        {name: 'Mezcaleria Tobala', address: '1816 E 6th St'},
        {name: 'The Liberty', address: '1618 E 6th St'},
        {name: 'Ah Sing Den', address: '1100 E 6th St'},
        {name: 'Milonga Room', address: '1201 E 6th St'},
        {name: 'Hi Hat Public House', address: '2121 E 6th St'},
        {name: 'The Eastern', address: '1511 E 6th St'},
        {name: 'Lazarus Brewing Co.', address: '1902 E 6th St'},
        {name: 'Hotel Vegas', address: '1502 E 6th St'},
        {name: 'Licha’s Cantina', address: '1306 E 6th St'},
        {name: 'Latchkey', address: '1308 E 6th St'},
        {name: 'Gelatria Gemelli', address: '1009 E 6th St'},
        {name: 'Yellow Jacket Social Club', address: '1704 E 5th St'},
        {name: 'The Hightower', address: '1209 E 7th St'}
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('fourth').insert([
        {name: 'Pêche', address: '208 W 4th St'},
        {name: 'Rain', address: '217 W 4th St'},
        {name: 'Halcyon', address: '218 W 4th St'},
        {name: 'Oilcan Harry’s', address: '211 W 4th S'},
        {name: 'Academia', address: '208 W 4th St'},
        {name: 'Hanger Lounge', address: '404 Colorado St'},
        {name: 'The Capital Grille', address: '117 W 4th St'},
        {name: 'RA Sushi Bar Restaurant', address: '117 W 4th St'},
        {name: 'Sellers Underground', address: '213 W 4th St'},
        {name: 'Highland Lounge', address: '404 Colorado St'}
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('bars').insert([
        {name: 'Container Bar', address: '90 Rainey St'},
        {name: 'Icenhauer’s', address: '83 Rainey St'},
        {name: 'Clive Bar', address: '609 Davis St'},
        {name: 'Half Step', address: '609 Davis St'},
        {name: 'Bar 96', address: '96 Rainey St'},
        {name: 'Unbarlievable', address: '76 Rainey St'},
        {name: 'Parlor Room', address: '88 Rainey St'},
        {name: 'Lucille', address: '77 Rainey St'},
        {name: 'Bungalow', address: '92 Rainey St'},
        {name: 'Lustre Pearl Rainey', address: '94 Rainey St'},
        {name: 'Javelina', address: '69 Rainey St'},
        {name: 'Bangers', address: '79 Rainey St'},
        {name: 'The Alibi', address: '96 Rainey St'},
        {name: 'Craft Pride', address: '61 Rainey St'},
        {name: 'The Drafting Room', address: '88 1/2 Rainey St'},
        {name: 'Geraldine’s', address: '605 Davis St'},
        {name: 'Bar Ilegal', address: '609 Davis St'},
        {name: 'L’estelle House', address: '88 1/2 Rainey St'},
        {name: 'El Naranjo', address: '85 Rainey St'},
        {name: 'Emmer & Rye', address: '51 Rainey St'},
        {name: 'Library Bar', address: '407 E 6th St'},
        {name: 'Blind Pig Pub', address: '317 E 6th St'},
        {name: 'Friends Bar', address: '208 E 6th St'},
        {name: 'Dirty Dog Bar', address: '505 E 6th St'},
        {name: 'Darwin’s Piano Bar', address: '223 E 6th St'},
        {name: 'Big Bang Bar', address: '415 E 6th St'},
        {name: 'Midnight Cowboy', address: '313 E 6th St'},
        {name: 'Moose Knuckle Pub', address: '406 E 6th St'},
        {name: 'Coyote Ugly', address: '501 E 6th St'},
        {name: 'Bat Bar', address: '218 E 6th St'},
        {name: 'Parkside', address: '301 E 6th St'},
        {name: 'The Lodge', address: '411 E 6th St'},
        {name: 'Peckerheads', address: '402 E 6th St'},
        {name: 'Lit Lounge', address: '215 E 6th St'},
        {name: 'San Jac Saloon', address: '300 E 6th St'},
        {name: '512 Bar', address: '408 E 6th St'},
        {name: 'The Jackalope', address: '404 E 6th St'},
        {name: 'Thirsty Nickel', address: '325 E 6th St'},
        {name: 'Two Bucks', address: '503 E 6th St'},
        {name: 'Easy Tiger', address: '709 E 6th St'},
        {name: 'Buckshot', address: '422 E 6th St'},
        {name: 'Voodoo Room', address: '419 E 6th St'},
        {name: 'Pour Choices', address: '401 E 6th St'},
        {name: 'Touche', address: '417 E 6th St'},
        {name: 'The Dizzy Rooster', address: '306 E 6th St'},
        {name: 'Eureka!', address: '200 E 6th St'},
        {name: 'Roppolo’s', address: '414 E 6th St'},
        {name: 'HandleBar', address: '121 E 5th St'},
        {name: 'The Side Bar', address: '602 E 7th St'},
        {name: 'Key Bar', address: '617 W 6th St'},
        {name: 'Star Bar', address: '600 W 6th St'},
        {name: 'The Dogwood', address: '715 W 6th St'},
        {name: 'Parlor and Yard', address: '601 W 6th St'},
        {name: 'The Rustic Tap', address: '613 W 6th St'},
        {name: 'Kung Fu Saloon', address: '716 W 6th St'},
        {name: 'Green Light Social', address: '720 W 6th St'},
        {name: 'Buford’s', address: '700 W 6th St'},
        {name: 'Concrete Cowboy', address: '719 W 6th St'},
        {name: 'Pop', address: '620 W 6th St'},
        {name: 'The Belmont', address: '305 W 6th St'},
        {name: 'Austin Ale House', address: '301 W 6th St'},
        {name: 'Brew Exchange', address: '706 W 6th St'},
        {name: 'The Ranch', address: '710 W 6th St'},
        {name: 'Whistler’s', address: '1816 E 6th St'},
        {name: 'Shangri-La', address: '1016 E 6th St'},
        {name: 'Revelry Kitchen + Bar', address: '1410 E 6th St'},
        {name: 'Violent Crown Social Club', address: '1410 E 6th St'},
        {name: 'The Brixton', address: '1412 E 6th St'},
        {name: 'Rhino Room', address: '1012 E 6th St'},
        {name: 'La Perla Bar', address: '1512 E 6th St'},
        {name: 'Grackle', address: '1700 E 6th St'},
        {name: 'La Holly', address: '2500 E 6th St'},
        {name: 'Attabar', address: '1300 E 6th St'},
        {name: 'Cuvee Coffee Bar', address: '2000 E 6th St'},
        {name: 'The Volstead lounge', address: '1500 E 6th St'},
        {name: 'Mezcaleria Tobala', address: '1816 E 6th St'},
        {name: 'The Liberty', address: '1618 E 6th St'},
        {name: 'Ah Sing Den', address: '1100 E 6th St'},
        {name: 'Milonga Room', address: '1201 E 6th St'},
        {name: 'Hi Hat Public House', address: '2121 E 6th St'},
        {name: 'The Eastern', address: '1511 E 6th St'},
        {name: 'Lazarus Brewing Co.', address: '1902 E 6th St'},
        {name: 'Hotel Vegas', address: '1502 E 6th St'},
        {name: 'Licha’s Cantina', address: '1306 E 6th St'},
        {name: 'Latchkey', address: '1308 E 6th St'},
        {name: 'Gelatria Gemelli', address: '1009 E 6th St'},
        {name: 'Yellow Jacket Social Club', address: '1704 E 5th St'},
        {name: 'The Hightower', address: '1209 E 7th St'},
        {name: 'Pêche', address: '208 W 4th St'},
        {name: 'Rain', address: '217 W 4th St'},
        {name: 'Halcyon', address: '218 W 4th St'},
        {name: 'Oilcan Harry’s', address: '211 W 4th S'},
        {name: 'Academia', address: '208 W 4th St'},
        {name: 'Hanger Lounge', address: '404 Colorado St'},
        {name: 'The Capital Grille', address: '117 W 4th St'},
        {name: 'RA Sushi Bar Restaurant', address: '117 W 4th St'},
        {name: 'Sellers Underground', address: '213 W 4th St'},
        {name: 'Highland Lounge', address: '404 Colorado St'}
      ]);
    })
};