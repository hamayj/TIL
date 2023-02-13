use sesac;

CREATE TABLE board (
    idx int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    title varchar(50) NOT NULL,
    content mediumtext NOT NULL,
    regdate datetime NOT NULL,
    modidate datetime NOT NULL,
    passwd varchar(50) NOT NULL,
    hit int(11) NOT NULL DEFAULT 0
);

INSERT INTO `sesac`.`board`(`name`,`title`,`content`,`regdate`, `modidate`, `passwd`, `hit`) VALUES (`hama`, `title_hama`, `gogo hama`, `2023-02-02 20:50:54`, `2023-02-02 20:55:55`, `1234`, 0 );
