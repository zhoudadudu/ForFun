module.exports = (req, res) => {
    res.json({
      message: '欢迎使用 API',
      endpoints: ['/api/users'],
      timestamp: new Date().toISOString()
    });
  };