# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Sleep.destroy_all
Diaper.destroy_all
Activity.destroy_all
User.destroy_all



PASSWORD = "123"


  test_user = User.create(
        first_name: "Admin",
        last_name: "User",
        email: "admin@user.com",
        password: PASSWORD,
    )


test_activity = Activity.create(
    user: test_user
)

5.times do 
    created_at = Faker::Date.backward(days: 365 * 5)
  Sleep.create(
        title: "Sleep",
        duration: rand(10..80),
        created_at: created_at,
        updated_at: created_at,
        note: Faker::Lorem.sentence(word_count: 5),
        activity: test_activity
    )
end
5.times do 
    created_at = Faker::Date.backward(days: 365 * 5)
  Diaper.create(
        title: "Diaper",
        created_at: created_at,
        updated_at: created_at,
        note: Faker::Lorem.sentence(word_count: 5),
        activity: test_activity
    )
end
5.times do 
    created_at = Faker::Date.backward(days: 365 * 5)
  Formula.create(
        title: "Formula",
        amount: rand(10..80),
        created_at: created_at,
        updated_at: created_at,
        note: Faker::Lorem.sentence(word_count: 5),
        activity: test_activity
    )
end
1.times do 
    created_at = Faker::Date.backward(days: 365 * 5)
  Baby.create(
        first_name: "Roy",
        last_name: "Lee",
        dob: '2022-05-30',
        created_at: created_at,
        updated_at: created_at,
        user: test_user
    )
end



puts(User.count)
puts(Sleep.count)
puts(Diaper.count)
puts(Formula.count)
puts(Activity.count)
puts(Baby.count)