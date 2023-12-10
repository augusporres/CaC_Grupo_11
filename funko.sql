-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2023 at 07:43 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `funko`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `category_description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_description`) VALUES
(1, 'Funkos', 'Figuras coleccionables Funko Pop'),
(2, 'Remeras', 'Remeras de anime, series, peliculas y más'),
(3, 'LLaveros', 'Llaveros coleccionables');

-- --------------------------------------------------------

--
-- Table structure for table `licence`
--

CREATE TABLE `licence` (
  `licence_id` int(11) NOT NULL,
  `licence_name` varchar(45) NOT NULL,
  `licence_description` varchar(255) NOT NULL,
  `licence_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `licence`
--

INSERT INTO `licence` (`licence_id`, `licence_name`, `licence_description`, `licence_image`) VALUES
(1, 'Pokemon', 'Atrapa todos los que puedas y disfruta de una colección llena de amigos.', '/img/pokemon/pk-cover.jpg'),
(2, 'Star Wars', 'Disfruta de una saga que sigue agregando personajes a su colección.', '/img/star-wars/st-cover.jpg'),
(3, 'Harry Potter', 'Revive los recuerdos de una saga llena de magia y encanto.', '/img/harry-potter/hp-cover.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(60) NOT NULL,
  `product_description` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `sku` varchar(30) NOT NULL,
  `dues` int(11) DEFAULT NULL,
  `image_front` varchar(200) DEFAULT NULL,
  `image_back` varchar(200) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT current_timestamp(),
  `licence_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_description`, `price`, `stock`, `discount`, `sku`, `dues`, `image_front`, `image_back`, `create_time`, `licence_id`, `category_id`) VALUES
(3, 'Luke Skylwalker & Grogu', 'Figura coleccionable de Luke Skylwalker & Grogu - The Mandalorian Saga.', 2399.99, 8, 10, 'STW001003', 3, '/img/star-wars/luke-1.webp', '/img/star-wars/luke-box.webp', '2023-06-27 23:33:21', 2, 1),
(4, 'Stormtrooper Lightsaber', 'Figura coleccionable de Stormtrooper Lightsaber - Star Wars Saga.', 1799.99, 8, 10, 'STW001004', 3, '/img/star-wars/trooper-1.webp', '/img/star-wars/trooper-box.webp', '2023-06-27 23:33:21', 2, 1),
(5, 'Charmander Smiley', 'Figura coleccionable de Charmander - Pokemon Saga.', 1799.99, 8, 10, 'PKM001001', 3, '/img/pokemon/charmander-1.webp', '/img/pokemon/charmander-box.webp', '2023-06-27 23:33:21', 1, 1),
(6, 'Dragonite Hi!', 'Figura coleccionable de Dragonite - Pokemon Saga.', 1799.99, 8, 10, 'PKM001002', 3, '/img/pokemon/dragonite-1.webp', '/img/pokemon/dragonite-box.webp', '2023-06-27 23:33:21', 1, 1),
(7, 'Pidgeotto Flying', 'Figura coleccionable de Pidgeotto - Pokemon Saga.', 1799.99, 8, 10, 'PKM00103', 3, '/img/pokemon/pidgeotto-1.webp', '/img/pokemon/pidgeotto-box.webp', '2023-06-27 23:33:21', 1, 1),
(8, 'Pikachu Smiley', 'Figura coleccionable de Pikachu - Pokemon Saga.', 1799.99, 8, 10, 'PKM001004', 3, '/img/pokemon/pikachu-1.webp', '/img/pokemon/pikachu-box.webp', '2023-06-27 23:33:21', 1, 1),
(9, 'Vulpix Fancy', 'Figura coleccionable de Vulpix - Pokemon Saga.', 99.99, 8, 10, 'PKM001005', 3, '/img/pokemon/vulpix-1.webp', '/img/pokemon/vulpix-box.webp', '2023-06-27 23:33:21', 1, 1),
(10, 'Harry Potter & Hegwid', 'Figura coleccionable de Harry Potter & Hegwid - Harry Potter Saga.', 1799.99, 11, 10, 'HPT0', 9, '/img/harry-potter/harry-1.webp', '/img/harry-potter/harry-box.webp', '2023-06-27 23:33:21', 3, 1),
(11, 'Herminione Ball Dress', 'Figura coleccionable de Herminione - Harry Potter Saga.', 1799.99, 8, 10, 'HPT001002', 3, '/img/harry-potter/hermione-1.webp', '/img/harry-potter/hermione-box.webp', '2023-06-27 23:33:21', 3, 1),
(12, 'Luna Lovegood Lion Mask', 'Figura coleccionable de Luna Lovegood - Harry Potter Saga.', 1799.99, 8, 10, 'HPT001003', 3, '/img/harry-potter/luna-1.webp', '/img/harry-potter/luna-box.webp', '2023-06-27 23:33:21', 3, 1),
(13, 'Snape Patronus', 'Figura coleccionable de Snape Patronus - Harry Potter Saga.', 1799.99, 13, 10, 'HPT001004', 3, '/img/harry-potter/snape-patronus-1.webp', '/img/harry-potter/snape-patronus-box.webp', '2023-06-27 23:33:21', 3, 1),
(14, 'Baby Yoda II', 'Figura de baby yoda star wars', 1800.00, 15, 1, 'SSKAS4545', 1, '/img/baby-yoda-1.webp', '/img/baby-yoda-1.webp', '2023-12-10 16:28:00', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `role_name`) VALUES
(1, 'Admin'),
(2, 'Client');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(16) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `lastname`, `email`, `password`, `create_time`) VALUES
(1, 'Admin', 'Admin', 'admin@admin.com', 'admin', '2023-12-10 16:39:05'),
(2, 'Augusto Porres', 'Porres', 'augusporres@gmail.com', 'asd', '2023-12-10 18:29:27'),
(3, 'carlo', 'peres', 'cperez@gmail.com', '123', '2023-12-10 18:30:58'),
(4, 'marcos', 'perez', 'marcosperez@gmail.com', 'asd', '2023-12-10 18:32:00'),
(5, 'juan', 'carlos', 'jcarlo@gmail.com', 'asd', '2023-12-10 18:35:21'),
(6, 'marian', 'perez', 'mpere@gmail.com', 'asd', '2023-12-10 18:37:20'),
(7, 'hector', 'perez', 'hperez@gmail.com', 'asd', '2023-12-10 18:41:36');

-- --------------------------------------------------------

--
-- Table structure for table `user_has_role`
--

CREATE TABLE `user_has_role` (
  `user_user_id` int(11) NOT NULL,
  `role_role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `user_has_role`
--

INSERT INTO `user_has_role` (`user_user_id`, `role_role_id`) VALUES
(1, 1),
(4, 2),
(5, 2),
(6, 2),
(7, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `licence`
--
ALTER TABLE `licence`
  ADD PRIMARY KEY (`licence_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `sku_UNIQUE` (`sku`),
  ADD KEY `fk_product_licence1_idx` (`licence_id`),
  ADD KEY `fk_product_category1_idx` (`category_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_has_role`
--
ALTER TABLE `user_has_role`
  ADD PRIMARY KEY (`user_user_id`,`role_role_id`),
  ADD KEY `fk_user_has_role_role1_idx` (`role_role_id`),
  ADD KEY `fk_user_has_role_user_idx` (`user_user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `licence`
--
ALTER TABLE `licence`
  MODIFY `licence_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_product_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  ADD CONSTRAINT `fk_product_licence1` FOREIGN KEY (`licence_id`) REFERENCES `licence` (`licence_id`);

--
-- Constraints for table `user_has_role`
--
ALTER TABLE `user_has_role`
  ADD CONSTRAINT `fk_user_has_role_role1` FOREIGN KEY (`role_role_id`) REFERENCES `role` (`role_id`),
  ADD CONSTRAINT `fk_user_has_role_user` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
