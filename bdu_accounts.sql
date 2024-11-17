-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2024 at 04:29 PM
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
-- Database: `bdu_accounts`
--

-- --------------------------------------------------------

--
-- Table structure for table `access`
--

CREATE TABLE `access` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userId` bigint(20) UNSIGNED NOT NULL COMMENT 'FK',
  `createUser` tinyint(1) NOT NULL DEFAULT 0,
  `editUser` tinyint(1) NOT NULL DEFAULT 0,
  `deleteUser` tinyint(1) NOT NULL DEFAULT 0,
  `createFaculty` tinyint(1) NOT NULL DEFAULT 0,
  `editFaculty` tinyint(1) NOT NULL DEFAULT 0,
  `deleteFaculty` tinyint(1) NOT NULL DEFAULT 0,
  `createSession` tinyint(1) NOT NULL DEFAULT 0,
  `editSession` tinyint(1) NOT NULL DEFAULT 0,
  `deleteSession` tinyint(1) NOT NULL DEFAULT 0,
  `editAccess` tinyint(1) NOT NULL DEFAULT 0,
  `viewOthersHistory` tinyint(1) NOT NULL DEFAULT 0,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdBy` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK',
  `updatedAt` timestamp NULL DEFAULT NULL,
  `updatedBy` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `access`
--

INSERT INTO `access` (`id`, `userId`, `createUser`, `editUser`, `deleteUser`, `createFaculty`, `editFaculty`, `deleteFaculty`, `createSession`, `editSession`, `deleteSession`, `editAccess`, `viewOthersHistory`, `createAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '2024-07-26 15:43:39', 1, '2024-07-31 06:19:26', 1),
(16, 2066, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2024-08-02 06:22:56', 1, NULL, NULL),
(18, 2068, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2024-08-02 06:25:53', 1, '2024-08-02 06:27:56', 1),
(19, 2069, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, '2024-08-02 06:26:31', 1, '2024-08-05 10:28:43', 1),
(21, 2071, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, '2024-08-05 10:30:03', 2071, '2024-08-05 10:30:32', 1),
(22, 2072, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2024-08-05 10:49:09', 2072, NULL, NULL),
(26, 3076, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2024-08-14 13:32:31', 3076, NULL, NULL),
(27, 3077, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2024-08-14 13:33:48', 3077, '2024-11-08 16:20:10', 1),
(28, 3078, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2024-11-08 16:23:35', 3078, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `create_id`
--

CREATE TABLE `create_id` (
  `id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `create_id`
--

INSERT INTO `create_id` (`id`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20),
(21),
(22),
(23),
(24),
(25),
(26),
(27),
(28);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `full` varchar(255) DEFAULT NULL,
  `short` varchar(10) DEFAULT NULL,
  `facultyId` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK',
  `chairmanId` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK',
  `isDeleted` tinyint(1) DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdBy` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK',
  `updatedAt` timestamp NULL DEFAULT NULL,
  `updatedBy` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `full`, `short`, `facultyId`, `chairmanId`, `isDeleted`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, 'Internet of Things and Robotics Engineering', 'IRE', 1, 2071, 0, '2024-05-10 04:12:01', 1, '2024-08-05 10:31:03', 2071),
(2, 'Educational Technology', 'EdTech', 2, NULL, 0, '2024-05-10 04:12:01', 1, '2024-07-28 10:30:16', 1),
(3, 'Cyber Security', 'CS', 3, NULL, 0, '2024-06-18 13:42:51', NULL, '2024-07-30 13:28:58', 1),
(4, 'Data Science', 'DS', 4, NULL, 0, '2024-06-18 13:42:51', NULL, NULL, NULL),
(5, 'Software Engineering', 'SE', 4, NULL, 0, '2024-06-18 13:42:51', NULL, NULL, NULL),
(17, 'ss', 'ss', 11, NULL, 1, '2024-07-28 07:11:22', NULL, '2024-07-28 07:15:30', 1),
(19, 'B', 'b', 12, NULL, 1, '2024-07-28 11:20:21', 1, '2024-07-28 11:22:03', 1),
(20, 'F2', 'f2', 12, NULL, 1, '2024-07-28 11:20:54', 1, '2024-07-28 11:22:03', 1),
(21, 'A', 'A', 13, NULL, 1, '2024-07-28 11:21:07', 1, '2024-07-28 11:22:06', 1),
(22, 'Dhaka', 'DK', 15, NULL, 1, '2024-07-31 07:02:52', 1, '2024-07-31 07:07:58', 1),
(23, 'W', 'w', 15, NULL, 1, '2024-07-31 07:03:07', 1, '2024-07-31 07:07:58', 1),
(24, 'aaaa 2', 'a', 1, NULL, 1, '2024-11-08 16:11:53', 1, '2024-11-08 16:30:01', 1);

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `full` varchar(255) DEFAULT NULL,
  `short` varchar(10) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdBy` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK',
  `updatedAt` timestamp NULL DEFAULT NULL,
  `updatedBy` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`id`, `full`, `short`, `isDeleted`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, 'Cyber Physical System', 'CPS', 0, '2024-05-10 04:11:03', 1, '2024-07-28 11:17:36', 1),
(2, 'Digital Transformation', 'DT', 0, '2024-05-10 04:11:03', 1, '2024-06-19 05:02:14', 1),
(3, 'Security and Communications', 'SC', 0, '2024-06-18 13:40:25', NULL, '2024-06-19 05:03:09', 1),
(4, 'Software and Machine Intelligence', 'SMI', 0, '2024-06-18 13:40:25', NULL, '2024-06-19 04:50:15', 1),
(11, 'a', 'a', 1, '2024-06-20 06:30:21', 1, '2024-07-28 07:15:34', 1),
(12, 'A', 'a', 1, '2024-07-28 11:17:47', 1, '2024-07-28 11:22:03', 1),
(13, 'G2', 'g2', 1, '2024-07-28 11:20:54', 1, '2024-07-28 11:22:06', 1),
(14, 'a', 'a', 1, '2024-07-30 17:01:03', 1, '2024-07-30 17:01:07', 1),
(15, 'Barisal', 'BS', 1, '2024-07-31 07:02:42', 1, '2024-07-31 07:07:58', 1);

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userId` bigint(20) UNSIGNED NOT NULL COMMENT 'FK',
  `text` text DEFAULT NULL,
  `action` varchar(10) DEFAULT NULL,
  `undoParams` text DEFAULT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NULL DEFAULT NULL,
  `updateBy` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `userId`, `text`, `action`, `undoParams`, `isDeleted`, `createdAt`, `updateAt`, `updateBy`) VALUES
(11, 1, 'Create user access is removed from Jul Jalal Al Mamur Sayor(1901029@iot.bdu.ac.bd)', 'Update', NULL, 0, '2024-07-31 06:31:26', NULL, NULL),
(12, 1, 'New user created. Email: arif@gmal, Role: teacher', 'Create', NULL, 0, '2024-07-31 06:32:02', NULL, NULL),
(13, 1, 'New user Bobita(bobita@gmail.com) created as student', 'Create', NULL, 0, '2024-07-31 06:35:05', NULL, NULL),
(14, 1, 'New user Tahsan(tahsan@gmail.com) created as other', 'Create', NULL, 0, '2024-07-31 06:36:59', NULL, NULL),
(15, 1, 'Tahsan(tahsan@gmail.com) user\'s data is updated', 'Update', NULL, 0, '2024-07-31 06:37:14', NULL, NULL),
(17, 1, 'Tahsan(tahsan@gmail.com) is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51faf7caf5555655faf7caf59dc9557b75717c73f4a4', 1, '2024-07-31 07:00:18', '2024-07-31 07:01:21', 1),
(18, 1, 'Student name 477\",(email_477@gmail.com) is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51faf7caf5555655faf7caf59dc9557b737a777cf4a4', 1, '2024-07-31 07:02:01', '2024-07-31 07:02:15', 1),
(19, 1, 'Arif(arif@gmal) is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51faf7caf5555655faf7caf59dc9557b75717a7df4a4', 1, '2024-07-31 07:02:06', '2024-07-31 07:02:17', 1),
(20, 1, 'Faculty-department-program table data is modified', 'Modify', NULL, 0, '2024-07-31 07:02:42', NULL, NULL),
(21, 1, 'Faculty-department-program table data is modified', 'Modify', NULL, 0, '2024-07-31 07:02:52', NULL, NULL),
(22, 1, 'Faculty-department-program table data is modified', 'Modify', NULL, 0, '2024-07-31 07:03:07', NULL, NULL),
(23, 1, 'Nurjahan Nipa(user01bdu@gmail.com) is assigned as chairman of Dhaka department', 'Update', NULL, 0, '2024-07-31 07:03:30', NULL, NULL),
(24, 1, 'Faculty-department-program table data is modified', 'Modify', NULL, 0, '2024-07-31 07:04:18', NULL, NULL),
(25, 1, 'f3 program is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51f1f5c0cff5c3c4555655f1f5c0cff5c3c49dc9557b7573f4a4', 1, '2024-07-31 07:04:25', '2024-07-31 07:05:56', 1),
(26, 1, 'Dhaka department and its all program data is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51c9caf1c3f5f9c4cac2f9555655c9caf1c3f5f9c4cac2f99dc9557b7575f4a4', 1, '2024-07-31 07:06:38', '2024-07-31 07:06:50', 1),
(27, 1, 'Barisal faculty and its all department and program data is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51ccc3c7fac6f9fd555655ccc3c7fac6f9fd9dc9557b737af4a4', 1, '2024-07-31 07:06:57', '2024-07-31 07:07:07', 1),
(28, 1, 'Barisal faculty and its all department, program is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51ccc3c7fac6f9fd555655ccc3c7fac6f9fd9dc9557b737af4a4', 0, '2024-07-30 07:07:58', NULL, NULL),
(29, 1, 'Session table data is modified', 'Modify', NULL, 0, '2024-07-31 07:09:52', NULL, NULL),
(30, 1, '2023-25 session is deleted', 'DELETE', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51f7caf7f7cdc0c2555655f7caf7f7cdc0c29dc9557b7ff4a4', 1, '2024-07-31 07:10:01', '2024-07-31 07:10:10', 1),
(31, 1, '2022-23 session is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51f7caf7f7cdc0c2555655f7caf7f7cdc0c29dc9557b7cf4a4', 1, '2024-07-31 07:11:31', '2024-07-31 07:11:37', 1),
(32, 1, 'Edit user access is given to BITTA BOIBHOV BARMON(1901050@iot.bdu.ac.bd)', 'Update', NULL, 0, '2024-07-31 07:16:33', NULL, NULL),
(33, 1, 'Edit user access is removed from BITTA BOIBHOV BARMON(1901050@iot.bdu.ac.bd)', 'Update', NULL, 0, '2024-07-31 07:32:51', NULL, NULL),
(34, 1, 'Edit user access is given to Nurjahan Nipa(user01bdu@gmail.com)', 'Update', NULL, 0, '2024-07-31 07:32:58', NULL, NULL),
(36, 1, 'Student name 477\",(email_477@gmail.com) is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51faf7caf5555655faf7caf59dc9557b737a777cf4a4', 1, '2024-07-31 08:17:24', '2024-07-31 08:17:39', 1),
(37, 1, 'Student name 733\",(email_733@gmail.com) is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51faf7caf5555655faf7caf59dc9557b737f7d75f4a4', 0, '2024-07-31 08:17:26', NULL, NULL),
(38, 1, 'Edit user access is given to Arif Hossain(arif@gmal.com)', 'Update', NULL, 0, '2024-07-31 11:00:52', NULL, NULL),
(39, 1, 'Edit user access is removed from Arif Hossain(arif@gmal.com)', 'Update', NULL, 0, '2024-07-31 11:00:54', NULL, NULL),
(40, 1, 'Tahsan(tahsan@gmail.com) is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51faf7caf5555655faf7caf59dc9557b75717c73f4a4', 0, '2024-07-31 11:18:22', NULL, NULL),
(41, 1, 'New user Alpha(alpha#email) created as other', 'Create', NULL, 0, '2024-07-31 12:22:27', NULL, NULL),
(42, 1, 'New user Beta(beta@gmail.com) created as other', 'Create', NULL, 0, '2024-07-31 12:24:04', NULL, NULL),
(43, 1, 'New user gama(g@gmail.com) created as other', 'Create', NULL, 0, '2024-07-31 12:24:51', NULL, NULL),
(44, 1, 'Alpha(alpha#email) is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51faf7caf5555655faf7caf59dc9557b75717c75f4a4', 0, '2024-07-31 12:25:07', NULL, NULL),
(45, 1, 'Beta(beta@gmail.com) is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51faf7caf5555655faf7caf59dc9557b75717c77f4a4', 0, '2024-07-31 12:28:43', NULL, NULL),
(46, 1, 'gama(g@gmail.com) is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51faf7caf5555655faf7caf59dc9557b75717c79f4a4', 0, '2024-07-31 12:28:48', NULL, NULL),
(47, 1, 'View others history access is given to AFJAL HOSSAIN(1901007@iot.bdu.ac.bd)', 'Update', NULL, 0, '2024-08-01 10:36:34', NULL, NULL),
(48, 1, 'View others history access is removed from AFJAL HOSSAIN(1901007@iot.bdu.ac.bd)', 'Update', NULL, 0, '2024-08-01 10:36:46', NULL, NULL),
(49, 1, 'New user Nurjahan Nipa(nurjahan@bdu.ac.bd) created as teacher', 'Create', NULL, 0, '2024-08-02 06:21:53', NULL, NULL),
(50, 1, 'New user Samsuddin Ahmed(samsuddin@bdu.ac.bd) created as teacher', 'Create', NULL, 0, '2024-08-02 06:22:56', NULL, NULL),
(51, 1, 'New user Sumon Ahmed(1801042@iot.bdu.ac.bd) created as student', 'Create', NULL, 0, '2024-08-02 06:23:33', NULL, NULL),
(52, 1, 'Sumon Ahmed(1801042@iot.bdu.ac.bd) is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51faf7caf5555655faf7caf59dc9557b75717c7ff4a4', 0, '2024-08-02 06:25:07', NULL, NULL),
(53, 1, 'Nurjahan Nipa(nurjahan@bdu.ac.bd) is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51faf7caf5555655faf7caf59dc9557b75717c7af4a4', 0, '2024-08-02 06:25:10', NULL, NULL),
(54, 1, 'Samsuddin Ahmed(samsuddin@bdu.ac.bd) is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51faf7caf5555655faf7caf59dc9557b75717c7cf4a4', 0, '2024-08-02 06:25:13', NULL, NULL),
(55, 1, 'New user Nurjahan Nipa(nurjahan@bdu.ac.bd) created as teacher', 'Create', NULL, 0, '2024-08-02 06:25:53', NULL, NULL),
(56, 1, 'New user Samsuddin Ahmed(samsuddin@bdu.ac.bd) created as teacher', 'Create', NULL, 0, '2024-08-02 06:26:31', NULL, NULL),
(57, 1, 'New user Sumon Ahmed(1801042@iot.bdu.ac.bd) created as student', 'Create', NULL, 0, '2024-08-02 06:27:22', NULL, NULL),
(58, 1, 'Create user access is given to Nurjahan Nipa(nurjahan@bdu.ac.bd)', 'Update', NULL, 0, '2024-08-02 06:27:54', NULL, NULL),
(59, 1, 'Create user access is removed from Nurjahan Nipa(nurjahan@bdu.ac.bd)', 'Update', NULL, 0, '2024-08-02 06:27:56', NULL, NULL),
(60, 1, 'Edit user access is given to Samsuddin Ahmed(samsuddin@bdu.ac.bd)', 'Update', NULL, 0, '2024-08-02 06:28:10', NULL, NULL),
(61, 1, 'Edit user access is removed from Samsuddin Ahmed(samsuddin@bdu.ac.bd)', 'Update', NULL, 0, '2024-08-02 06:28:12', NULL, NULL),
(62, 1, 'Edit faculty access is given to Samsuddin Ahmed(samsuddin@bdu.ac.bd)', 'Update', NULL, 0, '2024-08-05 10:28:39', NULL, NULL),
(63, 1, 'Delete faculty access is given to Samsuddin Ahmed(samsuddin@bdu.ac.bd)', 'Update', NULL, 0, '2024-08-05 10:28:41', NULL, NULL),
(64, 1, 'Create faculty access is given to Samsuddin Ahmed(samsuddin@bdu.ac.bd)', 'Update', NULL, 0, '2024-08-05 10:28:43', NULL, NULL),
(65, 1, 'Samsuddin Ahmed(samsuddin@bdu.ac.bd) is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51faf7caf5555655faf7caf59dc9557b75717c7df4a4', 0, '2024-08-05 10:30:17', NULL, NULL),
(66, 1, 'Create faculty access is given to Samsuddin Ahmed(user07bdu@gmail.com)', 'Update', NULL, 0, '2024-08-05 10:30:30', NULL, NULL),
(67, 1, 'Edit faculty access is given to Samsuddin Ahmed(user07bdu@gmail.com)', 'Update', NULL, 0, '2024-08-05 10:30:31', NULL, NULL),
(68, 1, 'Delete faculty access is given to Samsuddin Ahmed(user07bdu@gmail.com)', 'Update', NULL, 0, '2024-08-05 10:30:32', NULL, NULL),
(69, 2071, 'Bitto Boivob(bitto.boivob@gmail.com) is removed as chairman from Internet of Things and Robotics Engineering department', 'Update', NULL, 0, '2024-08-05 10:30:54', NULL, NULL),
(70, 2071, 'Samsuddin Ahmed(user07bdu@gmail.com) is assigned as chairman of Internet of Things and Robotics Engineering department', 'Update', NULL, 0, '2024-08-05 10:31:03', NULL, NULL),
(71, 1, 'Edit user access is given to Jul Jalal Al-Mamur Sayor(user03bdu@gmail.com)', 'Update', NULL, 0, '2024-11-08 16:10:25', NULL, NULL),
(72, 1, 'Edit user access is removed from Jul Jalal Al-Mamur Sayor(user03bdu@gmail.com)', 'Update', NULL, 0, '2024-11-08 16:10:28', NULL, NULL),
(73, 1, 'Faculty-department-program table data is modified', 'Modify', NULL, 0, '2024-11-08 16:11:53', NULL, NULL),
(74, 1, 'Faculty-department-program table data is modified', 'Modify', NULL, 0, '2024-11-08 16:12:00', NULL, NULL),
(75, 1, 'aaaa 2 department and its all program is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51c9caf1c3f5f9c4cac2f9555655c9caf1c3f5f9c4cac2f99dc9557b7579f4a4', 1, '2024-11-08 16:12:03', '2024-11-08 16:18:37', 1),
(76, 1, 'Create user access is given to Jul Jalal Al-Mamur Sayor(user03bdu@gmail.com)', 'Update', NULL, 0, '2024-11-08 16:20:09', NULL, NULL),
(77, 1, 'Create user access is removed from Jul Jalal Al-Mamur Sayor(user03bdu@gmail.com)', 'Update', NULL, 0, '2024-11-08 16:20:10', NULL, NULL),
(78, 1, '2024-25 session muted', 'Update', NULL, 0, '2024-11-08 16:20:28', NULL, NULL),
(79, 1, '2024-25 session unmuted', 'Update', NULL, 0, '2024-11-08 16:20:29', NULL, NULL),
(80, 1, '2024-25 session muted', 'Update', NULL, 0, '2024-11-08 16:20:31', NULL, NULL),
(81, 1, '2024-25 session unmuted', 'Update', NULL, 0, '2024-11-08 16:20:35', NULL, NULL),
(82, 1, 'Session table data is modified', 'Modify', NULL, 0, '2024-11-08 16:20:44', NULL, NULL),
(83, 1, 'b session is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51f7caf7f7cdc0c2555655f7caf7f7cdc0c29dc9557b777df4a4', 1, '2024-11-08 16:20:48', '2024-11-08 16:20:54', 1),
(84, 1, 'a session is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51f7caf7f7cdc0c2555655f7caf7f7cdc0c29dc9557b777ef4a4', 0, '2024-11-08 16:21:02', NULL, NULL),
(85, 1, 'b session is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51f7caf7f7cdc0c2555655f7caf7f7cdc0c29dc9557b777df4a4', 0, '2024-11-08 16:21:04', NULL, NULL),
(86, 1, 'aaaa 2 department and its all program is deleted', 'Delete', 'a8f855c9c3f9c3c5c3f7ca557b55c3c7c7c0fac2f9f7555655c7c3f7ca557b55c9cac6caf9ca51c9caf1c3f5f9c4cac2f9555655c9caf1c3f5f9c4cac2f99dc9557b7579f4a4', 0, '2024-11-08 16:30:01', NULL, NULL);

-- --------------------------------------------------------

--
-- Stand-in structure for view `history_view`
-- (See below for the actual view)
--
CREATE TABLE `history_view` (
`id` bigint(20) unsigned
,`userId` bigint(20) unsigned
,`name` varchar(50)
,`image` varchar(255)
,`text` text
,`action` varchar(10)
,`undoParams` text
,`createdAt` timestamp
,`isDeleted` tinyint(1)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `non_student_user`
-- (See below for the actual view)
--
CREATE TABLE `non_student_user` (
`id` bigint(20) unsigned
,`email` varchar(50)
,`name` varchar(50)
,`image` varchar(255)
,`gender` enum('Male','Female','Other')
,`designation` varchar(255)
,`departmentId` bigint(20) unsigned
,`deptFull` varchar(255)
,`deptShort` varchar(10)
,`facultyId` bigint(20) unsigned
,`facultyFull` varchar(255)
,`facultyShort` varchar(10)
,`about` text
,`role` enum('student','teacher','other')
,`isMuted` tinyint(1)
,`mutedBy` bigint(20) unsigned
,`mutedAt` timestamp
,`lastLoginAt` timestamp
,`isDeleted` tinyint(1)
,`createdAt` timestamp
,`createdBy` bigint(20) unsigned
,`updatedAt` timestamp
,`updatedBy` bigint(20) unsigned
);

-- --------------------------------------------------------

--
-- Table structure for table `program`
--

CREATE TABLE `program` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `full` varchar(255) DEFAULT NULL,
  `short` varchar(50) NOT NULL,
  `departmentId` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK',
  `isDeleted` tinyint(1) DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdBy` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK',
  `updatedAt` timestamp NULL DEFAULT NULL,
  `updatedBy` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `program`
--

INSERT INTO `program` (`id`, `full`, `short`, `departmentId`, `isDeleted`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, 'B.Sc. in Internet of Things and Robotics Engineering', 'B.Sc. in IRE', 1, 0, '2024-05-10 04:12:38', 1, NULL, NULL),
(2, 'B.Sc. in Educational Technology', 'B.Sc. in EdTech', 2, 0, '2024-05-10 04:12:38', 1, NULL, NULL),
(3, 'B.Sc. in Cyber Security', 'B.Sc. in CS', 3, 0, '2024-06-18 13:46:33', NULL, NULL, NULL),
(4, 'B.Sc. in Data Science', 'B.Sc. in DS', 4, 0, '2024-06-18 13:46:33', NULL, NULL, NULL),
(5, 'B.Sc. in Software Engineering', 'B.Sc. in SE', 5, 0, '2024-06-18 13:46:33', NULL, NULL, NULL),
(17, 'we', 'we', 17, 1, '2024-07-28 07:11:39', NULL, '2024-07-28 07:15:27', 1),
(18, 'E', 'e', 19, 1, '2024-07-28 11:20:54', 1, '2024-07-28 11:22:03', 1),
(19, 'D2', 'd2', 19, 1, '2024-07-28 11:20:54', 1, '2024-07-28 11:22:03', 1),
(20, 'C2', 'C2', 19, 1, '2024-07-28 11:20:54', 1, '2024-07-28 11:22:03', 1),
(21, 'f3', 'f', 22, 1, '2024-07-31 07:03:07', 1, '2024-07-31 07:07:58', 1);

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE `session` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `session` varchar(10) NOT NULL,
  `usedByUser` int(11) NOT NULL DEFAULT 0,
  `isMuted` tinyint(1) NOT NULL DEFAULT 0,
  `isDeleted` tinyint(1) DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdBy` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK',
  `updatedAt` timestamp NULL DEFAULT NULL,
  `updatedBy` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`id`, `session`, `usedByUser`, `isMuted`, `isDeleted`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, '2018-19', 0, 0, 0, '2024-05-10 04:14:13', 1, '2024-08-02 06:25:07', 1),
(2, '2019-20', 203, 0, 0, '2024-05-10 04:14:13', 1, '2024-11-08 16:23:35', 3078),
(3, '2020-21', 0, 0, 0, '2024-05-10 04:14:13', 1, '2024-07-28 14:23:32', 1),
(6, '2022-23', 0, 0, 0, '2024-05-10 04:14:13', 1, '2024-07-31 07:11:37', 1),
(7, '2023-25', 1, 0, 1, '2024-05-11 16:08:49', 1, '2024-07-31 07:10:01', 1),
(8, '2026-30', 0, 1, 1, '2024-06-15 04:10:56', NULL, '2024-06-15 08:46:59', NULL),
(9, '2026-17', 0, 0, 1, '2024-06-15 10:50:03', NULL, '2024-06-17 08:56:07', 1),
(10, '2027-27', 0, 0, 1, '2024-06-15 10:51:21', NULL, '2024-06-17 08:56:02', 1),
(11, '2028-28', 0, 1, 1, '2024-06-15 10:51:52', NULL, '2024-06-17 08:55:58', 1),
(12, '2029-29', 0, 0, 1, '2024-06-15 10:53:50', NULL, '2024-06-17 08:55:54', 1),
(13, '2030-30', 0, 1, 1, '2024-06-15 10:58:25', NULL, '2024-06-17 08:55:49', 1),
(14, '2031-31', 0, 0, 1, '2024-06-15 11:02:05', NULL, '2024-06-17 08:55:46', 1),
(15, '2032-32', 0, 0, 1, '2024-06-15 11:02:57', NULL, '2024-06-17 08:55:40', 1),
(16, '2033-37', 0, 0, 1, '2024-06-15 11:03:13', NULL, '2024-06-17 08:55:32', 1),
(17, '2034-34', 0, 0, 1, '2024-06-15 16:29:30', NULL, '2024-06-16 17:22:52', 1),
(18, '2033-44', 0, 0, 1, '2024-06-17 05:14:19', 1, '2024-06-17 08:46:56', 1),
(19, '2040-43', 0, 0, 1, '2024-06-17 06:03:29', 1, '2024-06-17 08:46:41', 1),
(20, '2041-42', 0, 0, 1, '2024-06-17 08:35:57', 1, '2024-06-17 08:45:53', 1),
(21, '2042-43', 0, 0, 1, '2024-06-17 08:36:39', 1, '2024-06-17 08:44:45', 1),
(22, '2026-27', 0, 1, 1, '2024-06-17 11:48:13', 1, '2024-06-17 13:10:59', 1),
(23, '2026-28', 0, 0, 1, '2024-06-17 11:53:06', 1, '2024-06-17 13:10:51', 1),
(24, '2026-30', 0, 0, 1, '2024-06-17 11:54:48', 1, '2024-06-17 13:10:08', 1),
(25, '2029-29', 0, 0, 1, '2024-06-17 12:07:18', 1, '2024-06-17 13:10:05', 1),
(26, '2030-30', 0, 0, 1, '2024-06-17 12:11:12', 1, '2024-06-17 13:09:58', 1),
(27, '2031-31', 0, 0, 1, '2024-06-17 12:17:10', 1, '2024-06-17 13:10:01', 1),
(28, '2032-32', 0, 0, 1, '2024-06-17 12:18:11', 1, '2024-06-17 13:09:53', 1),
(29, '2033-33', 0, 0, 1, '2024-06-17 12:19:57', 1, '2024-06-17 13:09:45', 1),
(30, '2027-28', 0, 0, 1, '2024-06-17 17:57:38', 1, '2024-06-17 17:57:46', 1),
(31, '2025-25', 0, 0, 1, '2024-06-18 07:10:24', 1, '2024-06-18 07:10:35', 1),
(32, '2020-20', 0, 1, 1, '2024-06-20 06:30:42', 1, '2024-06-20 06:30:57', 1),
(33, 'as', 0, 0, 1, '2024-07-28 13:53:56', 1, '2024-07-28 13:54:04', 1),
(34, 'ass', 0, 0, 1, '2024-07-28 13:53:56', 1, '2024-07-28 13:54:01', 1),
(35, '123', 0, 0, 1, '2024-07-29 02:49:37', 1, '2024-07-29 02:49:53', 1),
(36, '2024-25', 0, 0, 0, '2024-07-31 07:08:26', 1, '2024-11-08 16:20:35', 1),
(37, '2025-26', 0, 0, 0, '2024-07-31 07:09:52', 1, NULL, NULL),
(38, 'a', 0, 0, 1, '2024-11-08 16:20:44', 1, '2024-11-08 16:21:02', 1),
(39, 'b', 0, 0, 1, '2024-11-08 16:20:44', 1, '2024-11-08 16:21:04', 1);

-- --------------------------------------------------------

--
-- Stand-in structure for view `student_user`
-- (See below for the actual view)
--
CREATE TABLE `student_user` (
`id` bigint(20) unsigned
,`email` varchar(50)
,`name` varchar(50)
,`image` varchar(255)
,`gender` enum('Male','Female','Other')
,`academicId` int(11)
,`sessionId` bigint(20) unsigned
,`session` varchar(10)
,`programId` bigint(20) unsigned
,`pgFull` varchar(255)
,`pgShort` varchar(50)
,`departmentId` bigint(20) unsigned
,`deptFull` varchar(255)
,`deptShort` varchar(10)
,`facultyId` bigint(20) unsigned
,`facultyFull` varchar(255)
,`facultyShort` varchar(10)
,`about` text
,`role` enum('student','teacher','other')
,`isMuted` tinyint(1)
,`mutedBy` bigint(20) unsigned
,`mutedAt` timestamp
,`lastLoginAt` timestamp
,`isDeleted` tinyint(1)
,`createdAt` timestamp
,`createdBy` bigint(20) unsigned
,`updatedAt` timestamp
,`updatedBy` bigint(20) unsigned
);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `dynamicId` bigint(20) UNSIGNED DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `gender` enum('Male','Female','Other') DEFAULT NULL,
  `academicId` int(11) DEFAULT NULL,
  `sessionId` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK',
  `programId` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK (St)',
  `departmentId` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK (Tr)',
  `designation` varchar(255) DEFAULT NULL,
  `about` text DEFAULT NULL,
  `role` enum('student','teacher','other') DEFAULT 'other',
  `isMuted` tinyint(1) DEFAULT 0,
  `mutedBy` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK',
  `mutedAt` timestamp NULL DEFAULT NULL,
  `lastLoginAt` timestamp NULL DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT 0,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `createdBy` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK',
  `updatedAt` timestamp NULL DEFAULT NULL,
  `updatedBy` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'FK'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `dynamicId`, `email`, `name`, `image`, `gender`, `academicId`, `sessionId`, `programId`, `departmentId`, `designation`, `about`, `role`, `isMuted`, `mutedBy`, `mutedAt`, `lastLoginAt`, `isDeleted`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, 28, 'bitto.boivob@gmail.com', 'Bitto Boivob', 'https://lh3.googleusercontent.com/a/ACg8ocKXh-eS2lUV1iKi4RoVKdLnojIj_3oNnh_iIiKkohe9ZSTKfn4=s96-c', 'Male', NULL, NULL, NULL, NULL, 'System Admin', NULL, 'other', 0, NULL, NULL, '2024-11-17 13:58:57', 0, '2024-05-10 04:16:33', 1, NULL, NULL),
(2066, NULL, 'samsuddin@bdu.ac.bd', 'Samsuddin Ahmed', NULL, 'Male', NULL, NULL, NULL, 1, 'Assistant professor', NULL, 'teacher', 0, NULL, NULL, NULL, 1, '2024-08-02 06:22:56', 1, '2024-08-02 06:25:13', 1),
(2068, NULL, 'nurjahan@bdu.ac.bd', 'Nurjahan Nipa', NULL, 'Male', NULL, NULL, NULL, 1, 'Assistant Professor', NULL, 'teacher', 0, NULL, NULL, NULL, 0, '2024-08-02 06:25:53', 1, NULL, NULL),
(2069, NULL, 'samsuddin@bdu.ac.bd', 'Samsuddin Ahmed', NULL, 'Male', NULL, NULL, NULL, 1, 'Assistant Professor', NULL, 'teacher', 0, NULL, NULL, NULL, 1, '2024-08-02 06:26:31', 1, '2024-08-05 10:30:17', 1),
(2071, 13, 'user07bdu@gmail.com', 'Samsuddin Ahmed', 'https://lh3.googleusercontent.com/a/ACg8ocLvinH_zAYh1MXW7NPLfGXQbFoZeStmcJfYVyzDoFkbSUsiHoc=s96-c', 'Male', NULL, NULL, NULL, 1, 'Assistant Professor', NULL, 'teacher', 0, NULL, NULL, '2024-08-06 01:07:44', 0, '2024-08-05 10:30:03', NULL, NULL, NULL),
(2072, 21, 'user01bdu@gmail.com', 'Nurjahan Nipa', 'https://lh3.googleusercontent.com/a/ACg8ocKuBNBbus_I0KIzJ6anIpQcgrrhRUUIsqu8gM_ofeGkSlu2gUQ=s96-c', 'Female', NULL, NULL, NULL, 1, 'Assistant Professor ', NULL, 'teacher', 0, NULL, NULL, '2024-08-16 09:00:56', 0, '2024-08-05 10:49:09', NULL, NULL, NULL),
(3076, 22, 'user02bdu@gmail.com', 'Sumon Ahemed', 'https://lh3.googleusercontent.com/a/ACg8ocJnDRsrTkVOxOeFhH9dHI1pa_wlm3z7SNkjI87jYRfZgCITtwE=s96-c', 'Male', 1801042, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, '2024-08-14 13:32:41', 0, '2024-08-14 13:32:31', NULL, NULL, NULL),
(3077, 23, 'user03bdu@gmail.com', 'Jul Jalal Al-Mamur Sayor', 'https://lh3.googleusercontent.com/a/ACg8ocJrXhxY-rG3Ih12ZjNCRZ0pXfIbww-mFtAB_zAPs3DDU07rOMY=s96-c', 'Male', 1901029, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, '2024-08-14 13:34:00', 0, '2024-08-14 13:33:48', NULL, NULL, NULL),
(3078, 25, 'user05bdu@gmail.com', 'Nishat Tasnim Shishir', 'https://lh3.googleusercontent.com/a/ACg8ocKeiseTtHO-n-SoYNat9WAkHUKcXuMezZYYPCGgCHeKxobej-E=s96-c', 'Female', 1901030, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, '2024-11-08 16:32:31', 0, '2024-11-08 16:23:35', NULL, NULL, NULL),
(3082, NULL, 'student1@gmail.com', 'Student 1', NULL, 'Male', 1901051, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3083, NULL, 'student2@gmail.com', 'Student 2', NULL, 'Male', 1901052, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3084, NULL, 'student3@gmail.com', 'Student 3', NULL, 'Male', 1901053, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3085, NULL, 'student4@gmail.com', 'Student 4', NULL, 'Male', 1901054, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3086, NULL, 'student5@gmail.com', 'Student 5', NULL, 'Male', 1901055, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3087, NULL, 'student6@gmail.com', 'Student 6', NULL, 'Male', 1901056, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3088, NULL, 'student7@gmail.com', 'Student 7', NULL, 'Male', 1901057, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3089, NULL, 'student8@gmail.com', 'Student 8', NULL, 'Male', 1901058, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3090, NULL, 'student9@gmail.com', 'Student 9', NULL, 'Male', 1901059, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3091, NULL, 'student10@gmail.com', 'Student 10', NULL, 'Male', 1901060, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3092, NULL, 'student11@gmail.com', 'Student 11', NULL, 'Male', 1901061, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3093, NULL, 'student12@gmail.com', 'Student 12', NULL, 'Male', 1901062, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3094, NULL, 'student13@gmail.com', 'Student 13', NULL, 'Male', 1901063, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3095, NULL, 'student14@gmail.com', 'Student 14', NULL, 'Male', 1901064, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3096, NULL, 'student15@gmail.com', 'Student 15', NULL, 'Male', 1901065, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3097, NULL, 'student16@gmail.com', 'Student 16', NULL, 'Male', 1901066, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3098, NULL, 'student17@gmail.com', 'Student 17', NULL, 'Male', 1901067, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3099, NULL, 'student18@gmail.com', 'Student 18', NULL, 'Male', 1901068, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3100, NULL, 'student19@gmail.com', 'Student 19', NULL, 'Male', 1901069, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3101, NULL, 'student20@gmail.com', 'Student 20', NULL, 'Male', 1901070, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3102, NULL, 'student21@gmail.com', 'Student 21', NULL, 'Male', 1901071, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3103, NULL, 'student22@gmail.com', 'Student 22', NULL, 'Male', 1901072, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3104, NULL, 'student23@gmail.com', 'Student 23', NULL, 'Male', 1901073, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3105, NULL, 'student24@gmail.com', 'Student 24', NULL, 'Male', 1901074, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3106, NULL, 'student25@gmail.com', 'Student 25', NULL, 'Male', 1901075, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3107, NULL, 'student26@gmail.com', 'Student 26', NULL, 'Male', 1901076, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3108, NULL, 'student27@gmail.com', 'Student 27', NULL, 'Male', 1901077, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3109, NULL, 'student28@gmail.com', 'Student 28', NULL, 'Male', 1901078, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3110, NULL, 'student29@gmail.com', 'Student 29', NULL, 'Male', 1901079, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3111, NULL, 'student30@gmail.com', 'Student 30', NULL, 'Male', 1901080, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3112, NULL, 'student31@gmail.com', 'Student 31', NULL, 'Male', 1901081, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3113, NULL, 'student32@gmail.com', 'Student 32', NULL, 'Male', 1901082, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3114, NULL, 'student33@gmail.com', 'Student 33', NULL, 'Male', 1901083, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3115, NULL, 'student34@gmail.com', 'Student 34', NULL, 'Male', 1901084, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3116, NULL, 'student35@gmail.com', 'Student 35', NULL, 'Male', 1901085, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3117, NULL, 'student36@gmail.com', 'Student 36', NULL, 'Male', 1901086, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3118, NULL, 'student37@gmail.com', 'Student 37', NULL, 'Male', 1901087, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3119, NULL, 'student38@gmail.com', 'Student 38', NULL, 'Male', 1901088, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3120, NULL, 'student39@gmail.com', 'Student 39', NULL, 'Male', 1901089, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3121, NULL, 'student40@gmail.com', 'Student 40', NULL, 'Male', 1901090, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3122, NULL, 'student41@gmail.com', 'Student 41', NULL, 'Male', 1901091, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3123, NULL, 'student42@gmail.com', 'Student 42', NULL, 'Male', 1901092, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3124, NULL, 'student43@gmail.com', 'Student 43', NULL, 'Male', 1901093, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3125, NULL, 'student44@gmail.com', 'Student 44', NULL, 'Male', 1901094, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3126, NULL, 'student45@gmail.com', 'Student 45', NULL, 'Male', 1901095, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3127, NULL, 'student46@gmail.com', 'Student 46', NULL, 'Male', 1901096, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3128, NULL, 'student47@gmail.com', 'Student 47', NULL, 'Male', 1901097, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3129, NULL, 'student48@gmail.com', 'Student 48', NULL, 'Male', 1901098, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3130, NULL, 'student49@gmail.com', 'Student 49', NULL, 'Male', 1901099, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3131, NULL, 'student50@gmail.com', 'Student 50', NULL, 'Male', 1901100, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3132, NULL, 'student51@gmail.com', 'Student 51', NULL, 'Male', 1901101, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3133, NULL, 'student52@gmail.com', 'Student 52', NULL, 'Male', 1901102, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3134, NULL, 'student53@gmail.com', 'Student 53', NULL, 'Male', 1901103, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3135, NULL, 'student54@gmail.com', 'Student 54', NULL, 'Male', 1901104, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3136, NULL, 'student55@gmail.com', 'Student 55', NULL, 'Male', 1901105, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3137, NULL, 'student56@gmail.com', 'Student 56', NULL, 'Male', 1901106, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3138, NULL, 'student57@gmail.com', 'Student 57', NULL, 'Male', 1901107, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3139, NULL, 'student58@gmail.com', 'Student 58', NULL, 'Male', 1901108, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3140, NULL, 'student59@gmail.com', 'Student 59', NULL, 'Male', 1901109, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3141, NULL, 'student60@gmail.com', 'Student 60', NULL, 'Male', 1901110, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3142, NULL, 'student61@gmail.com', 'Student 61', NULL, 'Male', 1901111, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3143, NULL, 'student62@gmail.com', 'Student 62', NULL, 'Male', 1901112, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3144, NULL, 'student63@gmail.com', 'Student 63', NULL, 'Male', 1901113, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3145, NULL, 'student64@gmail.com', 'Student 64', NULL, 'Male', 1901114, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3146, NULL, 'student65@gmail.com', 'Student 65', NULL, 'Male', 1901115, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3147, NULL, 'student66@gmail.com', 'Student 66', NULL, 'Male', 1901116, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3148, NULL, 'student67@gmail.com', 'Student 67', NULL, 'Male', 1901117, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3149, NULL, 'student68@gmail.com', 'Student 68', NULL, 'Male', 1901118, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3150, NULL, 'student69@gmail.com', 'Student 69', NULL, 'Male', 1901119, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3151, NULL, 'student70@gmail.com', 'Student 70', NULL, 'Male', 1901120, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3152, NULL, 'student71@gmail.com', 'Student 71', NULL, 'Male', 1901121, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3153, NULL, 'student72@gmail.com', 'Student 72', NULL, 'Male', 1901122, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3154, NULL, 'student73@gmail.com', 'Student 73', NULL, 'Male', 1901123, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3155, NULL, 'student74@gmail.com', 'Student 74', NULL, 'Male', 1901124, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3156, NULL, 'student75@gmail.com', 'Student 75', NULL, 'Male', 1901125, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3157, NULL, 'student76@gmail.com', 'Student 76', NULL, 'Male', 1901126, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3158, NULL, 'student77@gmail.com', 'Student 77', NULL, 'Male', 1901127, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3159, NULL, 'student78@gmail.com', 'Student 78', NULL, 'Male', 1901128, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3160, NULL, 'student79@gmail.com', 'Student 79', NULL, 'Male', 1901129, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3161, NULL, 'student80@gmail.com', 'Student 80', NULL, 'Male', 1901130, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3162, NULL, 'student81@gmail.com', 'Student 81', NULL, 'Male', 1901131, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3163, NULL, 'student82@gmail.com', 'Student 82', NULL, 'Male', 1901132, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3164, NULL, 'student83@gmail.com', 'Student 83', NULL, 'Male', 1901133, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3165, NULL, 'student84@gmail.com', 'Student 84', NULL, 'Male', 1901134, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3166, NULL, 'student85@gmail.com', 'Student 85', NULL, 'Male', 1901135, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3167, NULL, 'student86@gmail.com', 'Student 86', NULL, 'Male', 1901136, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3168, NULL, 'student87@gmail.com', 'Student 87', NULL, 'Male', 1901137, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3169, NULL, 'student88@gmail.com', 'Student 88', NULL, 'Male', 1901138, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3170, NULL, 'student89@gmail.com', 'Student 89', NULL, 'Male', 1901139, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3171, NULL, 'student90@gmail.com', 'Student 90', NULL, 'Male', 1901140, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3172, NULL, 'student91@gmail.com', 'Student 91', NULL, 'Male', 1901141, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3173, NULL, 'student92@gmail.com', 'Student 92', NULL, 'Male', 1901142, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3174, NULL, 'student93@gmail.com', 'Student 93', NULL, 'Male', 1901143, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3175, NULL, 'student94@gmail.com', 'Student 94', NULL, 'Male', 1901144, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3176, NULL, 'student95@gmail.com', 'Student 95', NULL, 'Male', 1901145, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3177, NULL, 'student96@gmail.com', 'Student 96', NULL, 'Male', 1901146, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3178, NULL, 'student97@gmail.com', 'Student 97', NULL, 'Male', 1901147, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3179, NULL, 'student98@gmail.com', 'Student 98', NULL, 'Male', 1901148, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3180, NULL, 'student99@gmail.com', 'Student 99', NULL, 'Male', 1901149, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3181, NULL, 'student100@gmail.com', 'Student 100', NULL, 'Male', 1901150, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3182, NULL, 'student101@gmail.com', 'Student 101', NULL, 'Male', 1901151, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3183, NULL, 'student102@gmail.com', 'Student 102', NULL, 'Male', 1901152, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3184, NULL, 'student103@gmail.com', 'Student 103', NULL, 'Male', 1901153, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3185, NULL, 'student104@gmail.com', 'Student 104', NULL, 'Male', 1901154, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3186, NULL, 'student105@gmail.com', 'Student 105', NULL, 'Male', 1901155, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3187, NULL, 'student106@gmail.com', 'Student 106', NULL, 'Male', 1901156, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3188, NULL, 'student107@gmail.com', 'Student 107', NULL, 'Male', 1901157, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3189, NULL, 'student108@gmail.com', 'Student 108', NULL, 'Male', 1901158, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3190, NULL, 'student109@gmail.com', 'Student 109', NULL, 'Male', 1901159, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3191, NULL, 'student110@gmail.com', 'Student 110', NULL, 'Male', 1901160, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3192, NULL, 'student111@gmail.com', 'Student 111', NULL, 'Male', 1901161, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3193, NULL, 'student112@gmail.com', 'Student 112', NULL, 'Male', 1901162, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3194, NULL, 'student113@gmail.com', 'Student 113', NULL, 'Male', 1901163, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3195, NULL, 'student114@gmail.com', 'Student 114', NULL, 'Male', 1901164, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3196, NULL, 'student115@gmail.com', 'Student 115', NULL, 'Male', 1901165, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3197, NULL, 'student116@gmail.com', 'Student 116', NULL, 'Male', 1901166, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3198, NULL, 'student117@gmail.com', 'Student 117', NULL, 'Male', 1901167, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3199, NULL, 'student118@gmail.com', 'Student 118', NULL, 'Male', 1901168, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3200, NULL, 'student119@gmail.com', 'Student 119', NULL, 'Male', 1901169, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3201, NULL, 'student120@gmail.com', 'Student 120', NULL, 'Male', 1901170, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3202, NULL, 'student121@gmail.com', 'Student 121', NULL, 'Male', 1901171, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3203, NULL, 'student122@gmail.com', 'Student 122', NULL, 'Male', 1901172, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3204, NULL, 'student123@gmail.com', 'Student 123', NULL, 'Male', 1901173, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3205, NULL, 'student124@gmail.com', 'Student 124', NULL, 'Male', 1901174, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3206, NULL, 'student125@gmail.com', 'Student 125', NULL, 'Male', 1901175, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3207, NULL, 'student126@gmail.com', 'Student 126', NULL, 'Male', 1901176, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3208, NULL, 'student127@gmail.com', 'Student 127', NULL, 'Male', 1901177, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3209, NULL, 'student128@gmail.com', 'Student 128', NULL, 'Male', 1901178, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3210, NULL, 'student129@gmail.com', 'Student 129', NULL, 'Male', 1901179, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3211, NULL, 'student130@gmail.com', 'Student 130', NULL, 'Male', 1901180, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3212, NULL, 'student131@gmail.com', 'Student 131', NULL, 'Male', 1901181, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3213, NULL, 'student132@gmail.com', 'Student 132', NULL, 'Male', 1901182, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3214, NULL, 'student133@gmail.com', 'Student 133', NULL, 'Male', 1901183, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3215, NULL, 'student134@gmail.com', 'Student 134', NULL, 'Male', 1901184, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3216, NULL, 'student135@gmail.com', 'Student 135', NULL, 'Male', 1901185, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3217, NULL, 'student136@gmail.com', 'Student 136', NULL, 'Male', 1901186, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3218, NULL, 'student137@gmail.com', 'Student 137', NULL, 'Male', 1901187, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3219, NULL, 'student138@gmail.com', 'Student 138', NULL, 'Male', 1901188, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3220, NULL, 'student139@gmail.com', 'Student 139', NULL, 'Male', 1901189, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3221, NULL, 'student140@gmail.com', 'Student 140', NULL, 'Male', 1901190, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3222, NULL, 'student141@gmail.com', 'Student 141', NULL, 'Male', 1901191, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3223, NULL, 'student142@gmail.com', 'Student 142', NULL, 'Male', 1901192, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3224, NULL, 'student143@gmail.com', 'Student 143', NULL, 'Male', 1901193, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3225, NULL, 'student144@gmail.com', 'Student 144', NULL, 'Male', 1901194, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3226, NULL, 'student145@gmail.com', 'Student 145', NULL, 'Male', 1901195, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3227, NULL, 'student146@gmail.com', 'Student 146', NULL, 'Male', 1901196, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3228, NULL, 'student147@gmail.com', 'Student 147', NULL, 'Male', 1901197, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3229, NULL, 'student148@gmail.com', 'Student 148', NULL, 'Male', 1901198, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3230, NULL, 'student149@gmail.com', 'Student 149', NULL, 'Male', 1901199, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3231, NULL, 'student150@gmail.com', 'Student 150', NULL, 'Male', 1901200, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3232, NULL, 'student151@gmail.com', 'Student 151', NULL, 'Male', 1901201, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3233, NULL, 'student152@gmail.com', 'Student 152', NULL, 'Male', 1901202, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3234, NULL, 'student153@gmail.com', 'Student 153', NULL, 'Male', 1901203, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3235, NULL, 'student154@gmail.com', 'Student 154', NULL, 'Male', 1901204, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3236, NULL, 'student155@gmail.com', 'Student 155', NULL, 'Male', 1901205, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3237, NULL, 'student156@gmail.com', 'Student 156', NULL, 'Male', 1901206, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3238, NULL, 'student157@gmail.com', 'Student 157', NULL, 'Male', 1901207, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3239, NULL, 'student158@gmail.com', 'Student 158', NULL, 'Male', 1901208, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3240, NULL, 'student159@gmail.com', 'Student 159', NULL, 'Male', 1901209, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3241, NULL, 'student160@gmail.com', 'Student 160', NULL, 'Male', 1901210, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3242, NULL, 'student161@gmail.com', 'Student 161', NULL, 'Male', 1901211, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3243, NULL, 'student162@gmail.com', 'Student 162', NULL, 'Male', 1901212, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3244, NULL, 'student163@gmail.com', 'Student 163', NULL, 'Male', 1901213, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3245, NULL, 'student164@gmail.com', 'Student 164', NULL, 'Male', 1901214, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3246, NULL, 'student165@gmail.com', 'Student 165', NULL, 'Male', 1901215, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3247, NULL, 'student166@gmail.com', 'Student 166', NULL, 'Male', 1901216, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3248, NULL, 'student167@gmail.com', 'Student 167', NULL, 'Male', 1901217, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3249, NULL, 'student168@gmail.com', 'Student 168', NULL, 'Male', 1901218, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3250, NULL, 'student169@gmail.com', 'Student 169', NULL, 'Male', 1901219, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3251, NULL, 'student170@gmail.com', 'Student 170', NULL, 'Male', 1901220, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3252, NULL, 'student171@gmail.com', 'Student 171', NULL, 'Male', 1901221, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3253, NULL, 'student172@gmail.com', 'Student 172', NULL, 'Male', 1901222, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3254, NULL, 'student173@gmail.com', 'Student 173', NULL, 'Male', 1901223, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3255, NULL, 'student174@gmail.com', 'Student 174', NULL, 'Male', 1901224, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3256, NULL, 'student175@gmail.com', 'Student 175', NULL, 'Male', 1901225, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3257, NULL, 'student176@gmail.com', 'Student 176', NULL, 'Male', 1901226, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3258, NULL, 'student177@gmail.com', 'Student 177', NULL, 'Male', 1901227, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3259, NULL, 'student178@gmail.com', 'Student 178', NULL, 'Male', 1901228, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3260, NULL, 'student179@gmail.com', 'Student 179', NULL, 'Male', 1901229, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3261, NULL, 'student180@gmail.com', 'Student 180', NULL, 'Male', 1901230, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3262, NULL, 'student181@gmail.com', 'Student 181', NULL, 'Male', 1901231, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3263, NULL, 'student182@gmail.com', 'Student 182', NULL, 'Male', 1901232, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3264, NULL, 'student183@gmail.com', 'Student 183', NULL, 'Male', 1901233, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3265, NULL, 'student184@gmail.com', 'Student 184', NULL, 'Male', 1901234, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3266, NULL, 'student185@gmail.com', 'Student 185', NULL, 'Male', 1901235, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3267, NULL, 'student186@gmail.com', 'Student 186', NULL, 'Male', 1901236, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3268, NULL, 'student187@gmail.com', 'Student 187', NULL, 'Male', 1901237, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3269, NULL, 'student188@gmail.com', 'Student 188', NULL, 'Male', 1901238, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3270, NULL, 'student189@gmail.com', 'Student 189', NULL, 'Male', 1901239, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3271, NULL, 'student190@gmail.com', 'Student 190', NULL, 'Male', 1901240, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3272, NULL, 'student191@gmail.com', 'Student 191', NULL, 'Male', 1901241, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3273, NULL, 'student192@gmail.com', 'Student 192', NULL, 'Male', 1901242, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3274, NULL, 'student193@gmail.com', 'Student 193', NULL, 'Male', 1901243, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3275, NULL, 'student194@gmail.com', 'Student 194', NULL, 'Male', 1901244, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3276, NULL, 'student195@gmail.com', 'Student 195', NULL, 'Male', 1901245, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3277, NULL, 'student196@gmail.com', 'Student 196', NULL, 'Male', 1901246, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3278, NULL, 'student197@gmail.com', 'Student 197', NULL, 'Male', 1901247, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3279, NULL, 'student198@gmail.com', 'Student 198', NULL, 'Male', 1901248, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3280, NULL, 'student199@gmail.com', 'Student 199', NULL, 'Male', 1901249, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL),
(3281, NULL, 'student200@gmail.com', 'Student 200', NULL, 'Male', 1901250, 2, 1, NULL, NULL, NULL, 'student', 0, NULL, NULL, NULL, 0, '2024-11-09 04:14:09', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure for view `history_view`
--
DROP TABLE IF EXISTS `history_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `history_view`  AS SELECT `h`.`id` AS `id`, `h`.`userId` AS `userId`, `u`.`name` AS `name`, `u`.`image` AS `image`, `h`.`text` AS `text`, `h`.`action` AS `action`, `h`.`undoParams` AS `undoParams`, `h`.`createdAt` AS `createdAt`, `h`.`isDeleted` AS `isDeleted` FROM (`history` `h` left join `users` `u` on(`u`.`id` = `h`.`userId`)) ;

-- --------------------------------------------------------

--
-- Structure for view `non_student_user`
--
DROP TABLE IF EXISTS `non_student_user`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `non_student_user`  AS SELECT `u`.`id` AS `id`, `u`.`email` AS `email`, `u`.`name` AS `name`, `u`.`image` AS `image`, `u`.`gender` AS `gender`, `u`.`designation` AS `designation`, `u`.`departmentId` AS `departmentId`, `d`.`full` AS `deptFull`, `d`.`short` AS `deptShort`, `d`.`facultyId` AS `facultyId`, `f`.`full` AS `facultyFull`, `f`.`short` AS `facultyShort`, `u`.`about` AS `about`, `u`.`role` AS `role`, `u`.`isMuted` AS `isMuted`, `u`.`mutedBy` AS `mutedBy`, `u`.`mutedAt` AS `mutedAt`, `u`.`lastLoginAt` AS `lastLoginAt`, `u`.`isDeleted` AS `isDeleted`, `u`.`createdAt` AS `createdAt`, `u`.`createdBy` AS `createdBy`, `u`.`updatedAt` AS `updatedAt`, `u`.`updatedBy` AS `updatedBy` FROM ((`users` `u` left join `department` `d` on(`d`.`id` = `u`.`departmentId`)) left join `faculty` `f` on(`f`.`id` = `d`.`facultyId`)) WHERE `u`.`role` <> 'student' ;

-- --------------------------------------------------------

--
-- Structure for view `student_user`
--
DROP TABLE IF EXISTS `student_user`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `student_user`  AS SELECT `u`.`id` AS `id`, `u`.`email` AS `email`, `u`.`name` AS `name`, `u`.`image` AS `image`, `u`.`gender` AS `gender`, `u`.`academicId` AS `academicId`, `u`.`sessionId` AS `sessionId`, `s`.`session` AS `session`, `u`.`programId` AS `programId`, `p`.`full` AS `pgFull`, `p`.`short` AS `pgShort`, `p`.`departmentId` AS `departmentId`, `d`.`full` AS `deptFull`, `d`.`short` AS `deptShort`, `d`.`facultyId` AS `facultyId`, `f`.`full` AS `facultyFull`, `f`.`short` AS `facultyShort`, `u`.`about` AS `about`, `u`.`role` AS `role`, `u`.`isMuted` AS `isMuted`, `u`.`mutedBy` AS `mutedBy`, `u`.`mutedAt` AS `mutedAt`, `u`.`lastLoginAt` AS `lastLoginAt`, `u`.`isDeleted` AS `isDeleted`, `u`.`createdAt` AS `createdAt`, `u`.`createdBy` AS `createdBy`, `u`.`updatedAt` AS `updatedAt`, `u`.`updatedBy` AS `updatedBy` FROM ((((`users` `u` left join `session` `s` on(`s`.`id` = `u`.`sessionId`)) left join `program` `p` on(`p`.`id` = `u`.`programId`)) left join `department` `d` on(`d`.`id` = `p`.`departmentId`)) left join `faculty` `f` on(`f`.`id` = `d`.`facultyId`)) WHERE `u`.`role` = 'student' ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access`
--
ALTER TABLE `access`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userId` (`userId`),
  ADD KEY `access.userId` (`userId`);

--
-- Indexes for table `create_id`
--
ALTER TABLE `create_id`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`),
  ADD KEY `facultyId` (`facultyId`),
  ADD KEY `chairmanId` (`chairmanId`),
  ADD KEY `dept_ibfk_3` (`updatedBy`),
  ADD KEY `dept.createdBy` (`createdBy`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faculty_ibfk_5` (`updatedBy`),
  ADD KEY `faculty.createdBy` (`createdBy`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `history.userId` (`userId`),
  ADD KEY `history.updateBy` (`updateBy`);

--
-- Indexes for table `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`id`),
  ADD KEY `deptId` (`departmentId`),
  ADD KEY `program_ibfk_5` (`updatedBy`),
  ADD KEY `program.createdBy` (`createdBy`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`id`),
  ADD KEY `session_ibfk_5` (`updatedBy`),
  ADD KEY `session.createdBy` (`createdBy`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dynamicId` (`dynamicId`),
  ADD KEY `users.sessionId` (`sessionId`),
  ADD KEY `users.programId` (`programId`),
  ADD KEY `users.deptId` (`departmentId`),
  ADD KEY `users.disabledBy` (`mutedBy`),
  ADD KEY `users.createdBy` (`createdBy`),
  ADD KEY `users.updatedBy` (`updatedBy`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `access`
--
ALTER TABLE `access`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `create_id`
--
ALTER TABLE `create_id`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `program`
--
ALTER TABLE `program`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `session`
--
ALTER TABLE `session`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3282;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `access`
--
ALTER TABLE `access`
  ADD CONSTRAINT `access.userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `department`
--
ALTER TABLE `department`
  ADD CONSTRAINT `dept.chairmanId` FOREIGN KEY (`chairmanId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `dept.createdBy` FOREIGN KEY (`createdBy`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `dept.facultyId` FOREIGN KEY (`facultyId`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dept.updatedBy` FOREIGN KEY (`updatedBy`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `faculty`
--
ALTER TABLE `faculty`
  ADD CONSTRAINT `faculty.createdBy` FOREIGN KEY (`createdBy`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `faculty.updatedBy` FOREIGN KEY (`updatedBy`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history.updateBy` FOREIGN KEY (`updateBy`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `history.userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `program`
--
ALTER TABLE `program`
  ADD CONSTRAINT `program.createdBy` FOREIGN KEY (`createdBy`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `program.deptId` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `program.updatedBy` FOREIGN KEY (`updatedBy`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `session`
--
ALTER TABLE `session`
  ADD CONSTRAINT `session.createdBy` FOREIGN KEY (`createdBy`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `session.updatedBy` FOREIGN KEY (`updatedBy`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users.createdBy` FOREIGN KEY (`createdBy`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users.deptId` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users.disabledBy` FOREIGN KEY (`mutedBy`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users.programId` FOREIGN KEY (`programId`) REFERENCES `program` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users.sessionId` FOREIGN KEY (`sessionId`) REFERENCES `session` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users.updatedBy` FOREIGN KEY (`updatedBy`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
