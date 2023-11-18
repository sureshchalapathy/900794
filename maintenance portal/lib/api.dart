import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class apiscreen extends StatefulWidget {
  const apiscreen({Key? key}) : super(key: key);
  @override
  State<apiscreen> createState() => _apiscreenState();
}

class _apiscreenState extends State<apiscreen> {
  List<dynamic> users = [];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('API Consuming')),
      body: ListView.builder(
          itemCount: users.length,
          itemBuilder: (context, index) {
            final user = users[index];
            final email = user['email'];
            final name = user['name']['first'];
            final imageu = user['picture']['thumbnail'];
            return ListTile(
              leading: CircleAvatar(
                child: Image.network(imageu),
              ),
              title: Text(name),
              subtitle: Text(email),
            );
          }),
      floatingActionButton: FloatingActionButton(
        onPressed: getdata,
      ),
    );
  }

  void getdata() async {
    print("Working Fine");
    const url = 'http://localhost:4000/customer/sales';
    final uri = Uri.parse(url);
    final response = await http.get(uri);
    final body = response.body;
    final json = jsonDecode(body);
    setState(() {
      users = json['results'];
    });
    print("Data are fetched");
  }
}
