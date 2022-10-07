router.get("/board/write/:idx", function (req, res, next) {
  if (typeof req.session.displayName !== "undefined") {
    // 만약 로그인한 유저라면
    res.render("boardHTML/write.html", { id: req.params.idx });
    // :idx는 마지막 포스트 id로, 게시판이 렌더링될 때 미리 서버측에서 전달해둔 값.
    // 글 쓰기 html로 이동합니다.
  } else {
    // 로그인을 하지 않았다면
    res.send(
      "<script>alert('로그인을 해주시기 바랍니다.'); window.history.back();</script>"
    );
    // alert를 발생시키고 이전 페이지로 이동합니다.
  }
});

router.post("/insert", (req, res) => {
  if (typeof req.session.displayName !== "undefined") {
    // 로그인하지 않은 사용자가 URL을 직접 입력하여 접근하는 것을 방지합니다.

    const title = req.body.title;
    const content = req.body.content;
    // form 태그로부터 제목, 내용 값을 전달받습니다.

    const author = req.session.displayName;
    // 작성자는 로그인한 유저의 ID 입니다.

    let filepath = "";
    if (typeof req.session.filepath == "undefined") {
      filepath = null;
    } else {
      filepath = req.session.filepath;
    }
    // 작성 중인 글에 파일을 첨부할 때, 업로드 로직에서 파일 경로를 보냅니다.
    // 만약 첨부된 파일이 없다면 null값으로 초기화합니다.

    if (title.length == 0 || content.length == 0) {
      res.send(
        "<script>alert('제목 또는 내용에 아무것도 작성되지 않았습니다.'); window.history.back()</script>"
      );
    }
    // 작성된 내용이 없다면 이전 페이지로 돌아가게끔 합니다.
    else {
      const authSql = "SELECT nick FROM users WHERE id=?";
      const insertSql =
        "INSERT INTO board (title, content, name, regdate, modidate, nick, uploadfilepath) VALUES(?,?,?,NOW(),NOW(),?,?)";
      // 기본적으로 쿼리문은 하드코딩하고 있지 않습니다.
      // query 함수에 SQL 문을 직접 쓰지 않으며,
      // 전달되어야할 값은 ? 처리로 넘기도록 하고 있습니다.

      conn.getConnection((err, connection) => {
        if (err) throw err;
        const authQuery = connection.query(
          authSql,
          [author],
          function (err, rows) {
            // 접속한 유저가 실제로 DB에 있는지 파악하여 부정한 글 쓰기를 방지합니다.

            if (err) {
              throw err;
            } else {
              const insertQuery = connection.query(
                insertSql,
                [title, content, author, rows[0].nick, filepath],
                function (err, rows) {
                  if (err) {
                    throw err;
                  } else {
                    res.send(
                      "<script>alert('작성되었습니다.'); document.location.href='/board/list'</script>"
                    );
                  }
                }
              );
            }
            req.session.filepath = "";
            connection.release();
          }
        );
      });
    }
  } else {
    res.send(
      "<script>alert('비정상적인 접근입니다.'); document.location.href='/info'</script>"
    );
    req.session.filepath = "";
  }
});
