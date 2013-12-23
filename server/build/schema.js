db.user.drop();
db.role.drop();
db.route.drop();
db.blog.drop();

users = [{'password': '30274c47903bd1bac7633bbf09743149ebab805f', 'is_active': false, 'email': 'mary@demo.org', 'role':1}, 
         {'password': '8843d7f92416211de9ebb963ff4ce28125932878', 'is_active': true, 'email': 'wendy@abc.com', 'role':2}, 
         {'password': '30274c47903bd1bac7633bbf09743149ebab805f', 'is_active': false, 'email': 'dustin@demo.org', 'role':2}, 
         {'password': '30274c47903bd1bac7633bbf09743149ebab805f', 'is_active': true, 'email': 'jenny@demo.org','role':2}, 
         {'password': '5bf1fd927dfb8679496a2e6cf00cbe50c1c87145', 'is_active': true, 'email': 'fred@gmail.ca','role':2}];
roles = [{'name':'admin', 'id':1}, {'name':'member', 'id':2}, {'name':'guest', 'id':3}];
routes = [{'path':'/home', 'roles': [3]}, {'path':'/about', 'roles': [3]}, {'path':'/users', 'roles': [1]}];
blogs = [{'title':'blog title 1 Starred by GitHub staff','content': "We've had as much fun using the new GitHub Explore as we've had building it. We're sharing the repositories we've discovered in the new Starred by GitHub staff section.",'date': new Date('2013/8/11')},
         {'title':'blog title 2 More Explore Features','content': "We've drafted your friends to help you find even more interesting projects with a new module on GitHub Explore. You'll now see stars from people you follow on the explore landing page, the mobile version, and the explore newsletter.",'date': new Date('2013/10/21')},
         {'title':'blog title 3 GitHub Pages just got easier','content': "Today we're rolling out a reimagined pages.github.com, focused on helping you quickly and easily publish your first GitHub Pages site.",'date': new Date('2013/6/23')},
         {'title':'blog title 4 Soft-wrapping on prose diffs','content': "Starting today, diffs on prose documents are soft-wrapped./n Before",'date': new Date('2013/11/11')}]

db.user.insert(users);
db.role.insert(roles);
db.route.insert(routes);
db.blog.insert(blogs);

db.user.ensureIndex({email: 1}, {unique: true});
db.role.ensureIndex({name: 1}, {unique: true});
db.route.ensureIndex({path: 1}, {unique: true});
