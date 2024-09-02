import 'package:flutter/material.dart';

class IntroBtns extends StatelessWidget {
  final MainAxisAlignment alignment;
  const IntroBtns({super.key, required this.alignment});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: alignment,
      children: [
        OutlinedButton(
          onPressed: () {
          },
          style: OutlinedButton.styleFrom(
            foregroundColor: Colors.white, backgroundColor: Colors.black,
            side: const BorderSide(
              color: Colors.orange,
              width: 2,
            ),
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(50),
            ),
          ),
          child: const Text(
            'View LinkedIn',
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 15,
            ),
          ),
        ),
        const SizedBox(width: 16),
        OutlinedButton(
          onPressed: () {
          },
          style: OutlinedButton.styleFrom(
            foregroundColor: Colors.white, backgroundColor: Colors.black,
            side: const BorderSide(
              color: Colors.white,
              width: 2,
            ),
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(50),
            ),
          ),
          child: const Text(
            'Resume',
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 15,
            ),
          ),
        ),
      ],
    );
  }
}
