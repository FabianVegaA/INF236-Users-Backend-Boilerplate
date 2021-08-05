import Notice from "../models/Noticie";

export default class NoticeController {
  async getLastNotices(req, res) {
    let notices = await Notice.find(
      {},
      {
        sort: {
          date: -1,
        },
      },
      {
        limit: 10,
      }
    );
    res.json(notices);
  }

  async getNotice(req, res) {
    let notice = await Notice.findOne({
      _id: req.params.id,
    });
    res.json(notice);
  }

  async createNotice(req, res) {
    let notice = new Notice(req.body);
    await notice.save();
    res.json(notice);
  }

  async updateNotice(req, res) {
    let notice = await Notice.findOne({
      _id: req.params.id,
    });
    notice = _.extend(notice, req.body);
    await notice.save();
    res.json(notice);
  }

  // This is a method that remove changes status of a notice to false
  async deleteNotice(req, res) {
    let notice = await Notice.findOne({
      _id: req.params.id,
    });
    notice.status = false;
    await notice.save();
    res.json(notice);
  }
}
