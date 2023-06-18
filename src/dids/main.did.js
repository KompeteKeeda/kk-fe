export const idlFactory = ({ IDL }) => {
  const Banner = IDL.Record({
    'id' : IDL.Text,
    'url' : IDL.Text,
    'endDate' : IDL.Text,
    'redirectUrl' : IDL.Text,
  });
  const Event = IDL.Record({
    'id' : IDL.Text,
    'title' : IDL.Text,
    'endDate' : IDL.Opt(IDL.Int),
    'venue' : IDL.Text,
    'host' : IDL.Text,
    'description' : IDL.Text,
    'timestamp' : IDL.Int,
    'coverUrl' : IDL.Text,
    'prizePool' : IDL.Int,
  });
  const userId = IDL.Text;
  const tagId = IDL.Text;
  const News = IDL.Record({
    'id' : IDL.Text,
    'title' : IDL.Text,
    'content' : IDL.Text,
    'endDate' : IDL.Opt(IDL.Int),
    'userId' : userId,
    'tags' : IDL.Vec(tagId),
    'viewCount' : IDL.Int,
    'coverUrl' : IDL.Text,
  });
  const Result_1 = IDL.Variant({ 'ok' : News, 'err' : IDL.Text });
  const User = IDL.Record({
    'id' : IDL.Text,
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
  const bannerId = IDL.Text;
  const Result_3 = IDL.Variant({ 'ok' : Banner, 'err' : IDL.Text });
  const eventId = IDL.Text;
  const Result_2 = IDL.Variant({ 'ok' : Event, 'err' : IDL.Text });
  const newsId = IDL.Text;
  const Result = IDL.Variant({ 'ok' : User, 'err' : IDL.Text });
  return IDL.Service({
    'createBanner' : IDL.Func([Banner], [Banner], []),
    'createEvent' : IDL.Func([Event], [Event], []),
    'createNews' : IDL.Func([News], [Result_1], []),
    'createUser' : IDL.Func([User], [User], []),
    'http_request' : IDL.Func([HttpRequest], [HttpResponse], ['query']),
    'readAllBanners' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Vec(Banner)],
        ['query'],
      ),
    'readAllNews' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Vec(News)], ['query']),
    'readAllTagNews' : IDL.Func(
        [tagId, IDL.Nat, IDL.Nat],
        [IDL.Vec(News)],
        ['query'],
      ),
    'readAllTags' : IDL.Func([], [IDL.Vec(tagId)], ['query']),
    'readBanner' : IDL.Func([bannerId], [Result_3], ['query']),
    'readEvent' : IDL.Func([eventId], [Result_2], ['query']),
    'readNews' : IDL.Func([newsId], [Result_1], ['query']),
    'readUser' : IDL.Func([userId], [Result], ['query']),
    'updateBanner' : IDL.Func([bannerId, Banner], [Result_3], []),
    'updateEvent' : IDL.Func([eventId, Event], [Result_2], []),
    'updateNews' : IDL.Func([newsId, News], [Result_1], []),
    'updateUser' : IDL.Func([User], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
