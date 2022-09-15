-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: users
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `subject` varchar(20) NOT NULL,
  `bookName` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES ('CS101','How to Think like a Computer Scientist, Allen B. Downey, 2002'),('CS210','Digital Logic & Computer Design, M. M. Morris, 2016'),('CS220','The C Programming Language, B. W. Kernighan, D. Ritchie, 2015'),('CS220','Data Structures & Algorithms, A. Aho, 2002\n'),('CS221','Discrete Mathematics and Its Applications, K. Rosen, 2017'),('CS221',' Algebra, by M. Artin, Prentice Hall, 1991'),('CS230','Introduction to Probability and Statistics for Engineers and Scientists, S. Ross, 2007'),('CS211','Computer Organization and Design: The Hardware/Software Interface, 5th Ed. MIPS, D. A. Patterson'),('CS212','Computer Networking: A Top-Down Approach, J. F. Kurose, K. W. Ross, 2017'),('CS222','Algorithms, S. Dasgupta, C. H. Papadimitriou, U. V. Vazirani, 2017'),('CS222','Algorithm Design, J. Kleinberg, E. Tardos, 2013'),('CS300','Programming Languages: Concepts & Constructs, R. Sethi, 2006.'),('CS300','Programming in Haskell, G. Hutton, 2016.'),('CS310','Operating System Principles, A. Silberschatz, P. B. Galvin, G. Gagne, 2006\n'),('CS320',' Logic in Computer Science: Modelling and Reasoning about Systems, M. Huth, M. Ryan, 2004'),('CS330',' Artificial Intelligence 3e: A Modern Approach, S. Russel and P. Norvig, 2015.'),('CS331',' Machine Learning, T. Mitchell, 2009.\n'),('CS321','Introduction to Automata Theory, Languages, and Computation, J. E. Hopcroft, R. Motwani, J. D.\nUllman, 2008'),('CS321','Introduction to the Theory of Computation, M. Sipser, 2014'),('CS311','Compilers, A. Aho, J. Ullman, R. Sethi, M. S. Lam, 2013.'),('ME200','Fundamentals of Thermodynamics. 7th Edition (2009). Claus Borgnakke and Richard E. Sonntag.\nJohn Wiley & Sons, Inc.\n'),('ME201','RW Fox, PJ Pritchard, AT McDonald, Introduction to fluid mechanics, John Wiley & Sons'),('ME201','YA Cengel, JM Cimbala, Fluid mechanics, McGraw Hill Publishers.\n'),('ME201','FM White, Fluid mechanics, McGraw Hill Publishers'),('ME201','SK Som, G Biswas, S Chakraborty, Introduction to fluid mechanics and fluid machines, McGraw Hill\npublishers.\n'),('ME210','S.H. Crandall, N.C. Dahl and S.J. Lardner, An introduction to Mechanics of solids, Tata McGraw Hill\nThird Edition 2012'),('ME210','E.P. Popov, Engineering Mechanics of Solids, Prentice Hall of India, 2nd edition, 2012'),('ME210','M. Salvadori and R. Heller, Structure in Architecture, Prentice Hall Inc, 1963'),('ME210','S.P. Timoshenko and D.H. Young, Elements of Strength of Materials, 5th ed, Affiliated East West\nPress, 1976'),('MTH3142','Walter A. Strauss, Partial Differential Equations: An Introduction'),('MTH3142','Mark A. Pinsky, Partial Differential Equations and Boundary value Problems with Applications.\n'),('MTH3142','Lawrence C. Evans Partial Differential Equations , 2nd edition, 2010'),('MTH3142','Sandro Salsa. Partial Differential Equations in Action: From Modelling to Theory, 2015'),('ME212','N. Siddheshwar, P. Kannaiah, V. V. S. Sastry; Machine Drawing; Tata-McGraw Hill.\n'),('ME212','K. C. John; A text book of Machine Drawing; PHI Learning Pvt. Ltd., New Delhi.\n'),('ME212',' N. D. Junnarkar; Machine Drawing; Pearson Education.\n'),('ME212','N. D. Bhat; Machine Drawing; Charotar Publishing Company.\n'),('ME220','Ghosh A. and Mallick A. K., Manufacturing Science, Affiliated East West Press, 2001'),('ME220','Rao P. N., Manufacturing Technology- Foundry, Forming and Welding, Tata McGraw Hill, 1987'),('ME220','Schey J., Introduction to Manufacturing Processes, Tata McGraw Hill, 2000.'),('ME220',' Pye R. G. W., Injection Mold Design, Longman Scientific & Technical, Essex, 1989'),('ME221','R. K. Jain, ‘Engineering Metrology’, Khanna Publishers, 1999'),('ME221','J. F. W. Gayler and C.R. Shotbolt, ‘Metrology for Engineers’ Cassel London, 1964.\n'),('ME221','K. J. Hume, ‘Engineering Metrology’ MC Donald London, 1963'),('ME221','G. G. Thomas, ‘Engineering Metrology’, Butterworth’s, 1974.\n'),('ME222','Materials Science and Engineering: An Introduction, Sixth Edition by William D. Callister, Jr.\n'),('ME222','Phase Transformations in Metals and Alloys:David A. Porter, Kenneth E. Easterling'),('ME300','M.J.Moran and H.N.Shapiro, ‘Fundamentals of Engineering Thermodynamics’, Fourth Edition, Wiley,\nNew York, 2000.'),('ME300','R.W.Hay wood, ‘Analysis of Engineering Cycles’, Fourth Edition, Pergamon Press, Oxford, 1991.'),('ME300','M. L . Mathur and F. S. Mehta, ‘Steam and Other Tables (with Mollier Chart)’, Revised Edition, Jain\nBrothers, New Delhi, 2008 (or later)'),('ME310','Theory of Mechanisms and Machines, Amitabha Ghosh and Asok Kumar Mallik, East-West Press\nPrivate Limited.'),('ME310','Theory of Machines and Mechanisms, John J. Uicker, Gordon R. Pennock, Joseph E. Shigley, Oxford\nUniversity Press.\n'),('ME320','M. P. Groover; Principles of Modern Manufacturing; John Wiley & Sons Singapore Pte. Ltd.; 5th\nEdition; 2013'),('ME310','Kinematics, Dynamics and Design of Machinery, Kenneth J. Waldron, Gary L. Kinzel, Wiley.\n'),('ME310','The Theory of Machines, Thomas Bevan, Pearson Education India/CBS Publishers.'),('ME320','S. Kalpakjian, S. R. Schmid; Manufacturing Engineering and Technology; Pearson India Education\nServices Pvt. Ltd.; 7th Edition; 2018.\n'),('ME320','P. N. Rao; manufacturing Technology – Metal Cutting & Machine Tools; Tata McGraw-Hill Publishing\nCompany Limited; 2000.\n'),('ME320','A. Ghosh, A. K. Malik; Manufacturing Science; East-West Press Pvt. Ltd.; 2010.\n'),('ME301','Fundamentals of Heat and Mass Transfer, Frank P. Incrorpera, David P. Dewitt, Theodore L.\nBergman, Adrienne S. Lavine, 7th edition , John Wiley & Sons.\n'),('ME311','Fundamentals of machine component design, Robert C. Juvinall, Kurt M. Marshek, John Wiley &\nSons'),('ME322','R. M. Barnes; Motion and Time Study Design and Measurement of Work; John Wiley & Sons; 7th\nEdition, 2013'),('ME322','M. K. Groover; Work Systems — The Methods, Measurement & Management of Work; Pearson India\nEducation Services Pvt. Ltd.; 1st Edition; 2017.\n'),('ME322','K. George; Introduction to Work Study by ILO; Universal Book Corporation, Bombay; 2011.'),('ME322','W. J. Stevenson; Operation Management; McGraw Hill Education (India) Pvt. Ltd.; 12th Edition;\n2018.\n'),('ME322','R. Panneerselvam; Operations and Production Management; PHI Learning Pvt. Ltd.; 3rd Edition;\n2019.\n'),('ME323','. Mikell P. Groover, Automation, Production Systems, and Computer-Integrated Manufacturing, 4th\nEdition, Pearson , 2015.'),('ME323','Ibrahim Zeid and Sivasubramanian R, “CAD/CAM - Theory and Practice”, Tata McGraw Hill\nEducation, 2011.\n'),('ME323','Peter Smid, CNC Programming Handbook, Industrial Press, 24-Jan-2008'),('EE101','Giorgio Rizzoni, “Principles and applications of Electrical Engineering”, McGraw-Hill Higher\nEducation, 2007.'),('ME102','Engineering drawing: Plane and Solid Geometry, 9/e - N.D. Bhatt, Charotar Publication, 2006'),('ME101','\n2. W. A. J. Chapman, Workshop Technology- Part 2, Edward Arnold Ltd, (2007).'),('EE231','D. A. Neamen, Semiconductor Physics and Devices (IRWIN), Times Mirror High Education Group,\nChicago) 1997\n'),('EE231',' E.S. Yang, Microelectronic Devices, McGraw Hill, Singapore, 1988\n'),('EE231','B.G. Streetman, Solid State Electronic Devices, Prentice Hall of India, New Delhi, 1995\n'),('EE232','Stephen Brown and Zvonko Vranesic, “Fundamentals of Logic Design Logic with VHDL Design,” Tata\nMcGraw Hill'),('EE232','John F. Wakerly, “Digital Design: Principles and Practices,” PearsonEducation\n'),('EE232','Perry D. L., “VHDL: Programming by Example,” McGraw Hill'),('EE201','Signals and Systems - Continuous and Discrete, 4th Edn. Prentice Hall, 1998. A.V. Oppenheim, A.S.\nWillsky.\n'),('EE201','Haykin: Signals and Systems, Wiley Edition, 2002.\n'),('EE201',' B.P. Lathi : Communication Systems, John Wiley, 1987'),('EE221','Pappoulis: Probability, Random Variables and Random process.'),('EE221','Stark and Woods: Probability and random process with applications to signal processing\n'),('EE222','R K Shevgaonkar, Electromagnetic Waves, McGraw Hill Education, India 2006.\n'),('EE222','D K Cheng, Fundamentals of Eleectromagnetics, Addison Wesley, MA 1993.\n'),('EE222','E.C. Jordon and E.G. Balmain, Electro-magnetic Waves and Radiation Systems, 2nd Ed.Prentice Hall\nIndia, 1986.'),('EE223','S.S. Haykin, An Introduction to Analog and Digital Communication Systems, Wiley Eastern, 1989.\n'),('EE223','R.B. Carlson : Communication Systems (3rd Intl. Ed.), McGraw Hill, 1986'),('EE223',' B.P. Lathi : Communication Systems, John Wiley, 1987.\n'),('EE233','J.V. Wait, L.P. Huelsman and GA Korn, Introduction to Operational Amplifier theory and applications,\n2nd edition, McGraw Hill, New York, 1992.'),('EE233','J. Millman and A. Grabel, Microelectronics, 2nd edition, McGraw Hill, 1988.\n'),('EE233',' P. Horowitz and W. Hill, The Art of Electronics, 2nd edition, Cambridge University Press, 1989'),('EE211',' Stephen J. Chapman, Electric Machinery Fundamentals, McGraw - Hill Education, 2017.\n'),('EE211','A. E. Fitzgerald, Charles Kingsley Jr. and Stephen D. Umans, Electric Machinery, McGraw Hill\nEducation, 2017.\n'),('EE211','R. Krishnan, Permanent Magnet Synchronous and Brushless DC Motor Drives, CRC Press, 2019.'),('EE321','Proakis; Digital Communications, Fifth Edition, McGraw Hill'),('EE321','Haykin; Digital Communicaitons, Wiley Edition, 2001.\n'),('EE311','John Kassakian, Martin F. Schlecht, George C. Verghese, Principles of Power Electronics, Pearson\nEducation, 2010.\n'),('EE311','Robert.W. Erickson and Dragan Maksimovic, Fundamentals of Power Electronics, Springer, 2001,\nSecond Edition.\n'),('EE301','K. Ogata, Modern Control Engineering,, Pearson Higher Education, 2002\n'),('EE301','I.J. Nagrath, and M. Gopal, Control System Engineering, New Age, 2002'),('EE322','Oppenheim, Shafer and Buck, Discrete Time Signal Processing, Pearson Edition, 2014.\n'),('EE322','Digital Signal Processing, Pearson Edition, 2007.'),('EE322','SK Mitra, Digital Signal Processing, A computer based approach, McGraw Hill, 2013'),('EE313','W. Leonhard, Control of Electric Drives, Springer Verlag, 1985.'),('EE313','P. Vas, Vector Control of ac Machines, Clarendon press, 1990.\n'),('EE313','S. K. Pillai, A first course on Electrical Drives, New Age International Publishers, 2012\n'),('MTH101','Hughes-Hallett et al. - Calculus - Single and Multivariable, John-Wiley and Sons.'),('MTH101','James Stewart - Calculus, Thomson.'),('MTH101',' T. M. Apostol - Calculus, Volumes 1 and 2, Wiley Eastern.\n'),('MTH1021','S.K Mapa. Higher Algebra- Abstract and Linear Algebra.\n'),('MTH1022','E. Kreyszig, Advanced engineering mathematics (8th Edition), John Wiley (1999).'),('MTH1022','W. E. Boyce and R. DiPrima, Elementary Differential Equations (8th Edition), John Wiley (2005)'),('MTH211','T. Apostol, Mathematical Analysis.\n'),('MTH211','W. Rudin, Principles of Mathematical Analysis'),('MTH211','N.L. Carothers, Real Analysis.'),('MTH221',' C.L. Liu. Elements of Discrete Mathematics'),('MTH221','J.H van Lint and R.M Wilson, A course in Combinatorics, Cambridge University Press'),('MTH222','K. Hoffman and R. Kunze, Linear Algebra.\n'),('MTH222','G. Strang, Linear Algebra and its Applications.'),('MTH212','P.D. Lax and M.S. Terrell. Multivariate Calculus with applications. 2017. ( Course Textbook)'),('MTH212','M. Spivak. Calculus on Manifolds'),('MTH223',' I. N. Herstein, Topics in Algebra\n'),('MTH213','S. D. Conte and Carl de Boor, Elementary Numerical Analysis- An Algorithmic Approach.\n'),('MTH213',' K. E. Atkinson, Introduction to Numerical Analysis.\n'),('MTH213','Richard L. Burden and J. Douglas Faires, Numerical Analysis, (2010).'),('MTH223','David S Dummit, Richard M. Foote, Abstract Algebra, John Wiley and sons'),('MTH332','H M Taylor, S Karlin: An introduction to stochastic modelling'),('MTH332','P Bremaud: Discrete Probability Models and Methods.\n'),('MTH332','Olle Haggstrom; Finite Markov Chains and algorithmic applications.'),('MTH3152','Churchill, Brown, Complex variables and Applications. (2009)'),('MTH3152','Stein and Shakarchi, Complex analysis. (2013)'),('MTH3152','Ahlfors, Complex Analysis.\n'),('MTH3152','Serge Lang, Complex Analysis.'),('MTH3152','W. Rudin, Real and complex analysis'),('MTH316','E. Stein and R. Shakarchi. Real Analysis.'),('MTH316','E. Stein and R. Shakarchi. Functional Analysis.'),('MTH317','G. Simmons. Introduction to Topology and ModernAnalysis.\n'),('MTH317','James R. Munkres. Topology.'),('MTH317','M.A. Armstrong. Basic Topology.\n');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-14 23:41:48