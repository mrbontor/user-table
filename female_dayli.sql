-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 07, 2021 at 02:17 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `female_dayli`
--

-- --------------------------------------------------------

--
-- Table structure for table `fd_user_trx`
--

CREATE TABLE `fd_user_trx` (
  `id` int(20) NOT NULL,
  `firstname` varchar(30) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `item` varchar(100) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `total_price` decimal(11,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fd_user_trx`
--

INSERT INTO `fd_user_trx` (`id`, `firstname`, `lastname`, `email`, `item`, `quantity`, `total_price`) VALUES
(1, 'Ambo', 'Bejo', 'ambo@gmail.com', 'Barang1', 1, '50000'),
(2, 'Rio', 'Bejo', 'rio@gmail.com', 'Barang1', 2, '100000'),
(3, 'Supriadi', 'Bejo', 'supriadi@gmail.com', 'Barang3', 5, '250000'),
(4, 'Azaria', 'Bejo', 'azaria@gmail.com', 'Barang4', 2, '100000'),
(5, 'Ambo', 'Bejo', 'ambo@gmail.com', 'Barang2', 3, '150000'),
(6, 'Rio', 'Bejo', 'rio@gmail.com', 'Barang4', 1, '50000'),
(7, 'Azaria', 'Bejo', 'azaria@gmail.com', 'Barang1', 2, '100000'),
(8, 'Dafid', 'Bejo', 'dafid@gmail.com', 'Barang2', 1, '50000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fd_user_trx`
--
ALTER TABLE `fd_user_trx`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fd_user_trx`
--
ALTER TABLE `fd_user_trx`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
