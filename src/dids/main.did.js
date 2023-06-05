export const idlFactory = ({ IDL }) => {
    const bannerId = IDL.Text;
    const Banner = IDL.Record({
      'url' : IDL.Text,
      'endDate' : IDL.Text,
      'redirectUrl' : IDL.Text,
    });
    const newsId = IDL.Text;
    const userId = IDL.Text;
    const tagId = IDL.Text;
    const News = IDL.Record({
      'title' : IDL.Text,
      'content' : IDL.Text,
      'endDate' : IDL.Opt(IDL.Int),
      'userId' : userId,
      'tags' : IDL.Vec(tagId),
      'viewCount' : IDL.Int,
      'coverUrl' : IDL.Text,
    });
    const User = IDL.Record({
      'userName' : IDL.Text,
      'verified' : IDL.Bool,
      'contact' : IDL.Text,
      'endDate' : IDL.Opt(IDL.Int),
      'name' : IDL.Text,
      'email' : IDL.Text,
    });
    const headerField = IDL.Tuple(IDL.Text, IDL.Text);
    const HttpRequest = IDL.Record({
      'url' : IDL.Text,
      'method' : IDL.Text,
      'body' : IDL.Vec(IDL.Nat8),
      'headers' : IDL.Vec(headerField),
    });
    const HttpResponse = IDL.Record({
      'body' : IDL.Vec(IDL.Nat8),
      'headers' : IDL.Vec(headerField),
      'status_code' : IDL.Nat16,
    });
    const Result_2 = IDL.Variant({ 'ok' : Banner, 'err' : IDL.Text });
    const Result_1 = IDL.Variant({ 'ok' : News, 'err' : IDL.Text });
    const Result = IDL.Variant({ 'ok' : User, 'err' : IDL.Text });
    return IDL.Service({
      'createBanner' : IDL.Func([bannerId, Banner], [Banner], []),
      'createNews' : IDL.Func([newsId, News], [News], []),
      'createUser' : IDL.Func([User], [User], []),
      'http_request' : IDL.Func([HttpRequest], [HttpResponse], ['query']),
      'readBanner' : IDL.Func([bannerId], [Result_2], ['query']),
      'readNews' : IDL.Func([newsId], [Result_1], ['query']),
      'readUser' : IDL.Func([userId], [Result], ['query']),
      'updateBanner' : IDL.Func([bannerId, Banner], [Result_2], []),
      'updateNews' : IDL.Func([newsId, News], [Result_1], []),
      'updateUser' : IDL.Func([User], [Result], []),
    });
  };
  export const init = ({ IDL }) => { return []; };
  