class Api::V1::DiapersController < Api::ApplicationController
    before_action :authenticate_user!
    # before_action :current_activity
    
    
        def create
            activity = Activity.find_by_user_id(current_user)

            diaper = Diaper.new params.require(:diaper)
            .permit(
              :title,
              :note
            )
            diaper.activity = activity
            if diaper.save
               render json: {id: diaper.id}
            else
                render(
                    json: {errors: diaper.errors.messages },
                    status: 422 
                )
            end
        end
    
        def show
         
            diaper = Diaper.find params[:id]
            if diaper.activity.user === current_user
            render(json: diaper)
            
            else 
                render(json: {no: "no"})
            
            end
        end
    
        def update
            diaper = Diaper.find params[:id]
            if diaper.update(diaper_params)
                render json: {id: diaper.id}
                # redirect_to question_path(@question)
                # ^^older syntax
              else
                render(
                    json: { errors: diaper.errors.messages},
                    status: 422
                )
            end
        end
    
        def destroy
            diaper = Diaper.find params[:id]
            if diaper.destroy
            
                render(
                    json:{status: 200}
                )
            else
                #head :bad_request
                render( json: {status:500})
            end
          end
    
    
    private
    def diaper_params
        params.require(:diaper).permit(:note, :created_at)
      end
end
