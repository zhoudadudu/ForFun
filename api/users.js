module.exports = (req, res) => {
    if (req.method === 'GET') {
      return res.json({
        users: [
          { id: 1, name: '张三' },
          { id: 2, name: '李四' }
        ]
      });
    }
    
    // 如果支持其他方法
    res.status(405).json({ error: '方法不允许' });
  };